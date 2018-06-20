/****** 
This query Is used to find a specific customers information about their rank among all customers, which job type generated the most total revenue,
Number of Orders for that job type, Total Revenue among all job types, Email, Phone, Department, and Name. 
******/
SELECT TOP (1)
	D.[First Name],
	D.Name,
	G.Department,
	G.Email,
	G.Phone,
	D.[Total Revenue],
	C.[Job Total],
	C.[Work Type],
	C.Jobs AS 'Num of Orders',
	D.Rank
FROM (SELECT
		[ord_contact_first_name] AS 'First Name',
		ord_contact_full_name AS Name,
		ROW_NUMBER() OVER(ORDER BY CAST(SUM(job_total) AS DECIMAL(10,2)) DESC) AS Rank, --Get the rank among all customers by total Revenue
		CAST(SUM(job_total) AS DECIMAL(10,2)) AS [Total Revenue]
		FROM dbo._v_job_ord
		WHERE org_id = 'D44E6CA4-23D5-467F-96AF-487FFC5FC056'
	    AND
	    ord_date >=  $P{pFilterOrderDateFrom} --Placeholder for dates specified through the API
		AND
		ord_date <= $P{pFilterOrderDateTo}
		GROUP BY ord_contact_full_name,ord_contact_first_name) D 
LEFT JOIN (SELECT 
	Y.Customer,
	SUM(Y.[Job Total]) AS 'Job Total',
	SUM(Y.Jobs) AS Jobs,
	SUM(Cost) AS Cost,
	Y.[Work Type],
	SUM(Y.Profit) AS Profit
FROM (SELECT 
	Z.ord_contact_full_name AS 'Customer',
	CAST(SUM(Z.job_total) AS DECIMAL(10,2)) AS 'Job Total',
	Count(Z.ord_doc_num) AS 'Jobs',
	CAST(SUM(Z.ordrevd_extended_cost) AS DECIMAL(10,2)) AS Cost,
	Z.[Work Type],
	CAST(SUM(Z.job_total) - SUM(Z.ordrevd_extended_cost) AS DECIMAL(10,2)) AS 'Profit'
	FROM (SELECT
	Q.ord_contact_full_name,
	Q.ord_doc_num,
	SUM(Q.job_total) AS job_total,
	SUM(Q.ordrevd_extended_cost) AS ordrevd_extended_cost,
	Q.[Work Type]
	FROM (SELECT
		 A.ord_contact_full_name,
		 A.ord_doc_num,
		 SUM(A.job_total) AS job_total,
		 SUM(B.ordrevd_extended_cost) AS ordrevd_extended_cost,
		 CASE WHEN (a.sysworktype_code = 'LF-GEN' --Groups specified work codes under a more general term 'Large Format'
				OR A.sysworktype_code = 'LF-INV' 
				OR A.sysworktype_code = 'LF-BANNER'
				OR A.sysworktype_code = 'LF-POSTER' 
				OR A.sysworktype_code = 'LF-CORO' 
				OR A.sysworktype_code = 'LF-STICKER' 
				OR A.sysworktype_code = 'LF-ULTRA' 
				OR A.sysworktype_code = 'DO NOT USE' 
				OR (A.sysworktype_code = 'INV-P' 
				AND (A.item_code = 'P-POPUP-BANNER-ECONOMY'
					OR A.item_code = 'P-POPUP-BANNER-PREMIUM'
					OR A.item_code = 'P-POPUP-BANNER-TABLETOP'
					OR A.item_code = 'P-POPUP-BANNER-WIDE'
					OR A.item_code = 'P-PREMIUM METAL FRAME BANNER'
					OR A.item_code = 'P-TABLE-THROW-6/8FT-CONVERTIBLE'
					OR A.item_code = 'P-TABLE-THROW-6FT-ECONOMY'
					OR A.item_code = 'P-TABLE-THROW-6FT-STANDARD'
					OR A.item_code = 'P-TABLE-THROW-8FT-ECONOMY'
					OR A.item_code = 'P-TABLE-THROW-8FT-STANDARD'
					OR A.item_code = 'P-YARD-SIGN-18X12 '
					OR A.item_code = 'P-YARD-SIGN-18X12'
					OR A.item_code = 'P-YARD-SIGN-18X12-2-SIDE'
					OR A.item_code = 'P-YARD-SIGN-22X15'
					OR A.item_code = 'P-YARD-SIGN-22X15-2-SIDE'))) THEN 'Large Format' ELSE A.sysworktype_desc END AS 'Work Type'
	FROM dbo._v_job_ord A, dbo._v_job_ord_rev_det B 
	WHERE A.org_id = 'D44E6CA4-23D5-467F-96AF-487FFC5FC056'
		AND
		A.ord_date >=  $P{pFilterOrderDateFrom} --Placeholder for dates specified through the API
		AND
		A.ord_date <= $P{pFilterOrderDateTo}
		AND B.job_id = A.job_id
		GROUP BY A.ord_doc_num,
		 A.sysworktype_desc,
		 A.sysworktype_code,
		 A.item_code,
		 A.ord_contact_full_name) Q
	GROUP BY Q.ord_contact_full_name,
	Q.ord_doc_num,
	Q.[Work Type]) Z
	GROUP BY Z.ord_contact_full_name,
	Z.[Work Type]) Y
GROUP BY Y.Customer, Y.[Work Type]) C
  ON D.Name = C.Customer
  LEFT JOIN (SELECT Top (1) --Query used to find the most recent email and phone# from the client
	F.Customer,
	F.Phone,
	F.Email,
	F.Department
	FROM (SELECT
	A.ord_contact_full_name AS Customer,
	A.ord_cust_phone1 AS Phone,
	A.ord_customer_name AS 'Department',
	A.ord_bill_email_bus AS Email
	FROM dbo._v_job_ord A, dbo._v_ord_rev_det B  
	WHERE A.org_id = 'D44E6CA4-23D5-467F-96AF-487FFC5FC056'
		AND
	    A.ord_date >=  $P{pFilterOrderDateFrom} --Placeholder for dates specified through the API
		AND
		A.ord_date <= $P{pFilterOrderDateTo}
		AND
	 A.ord_cust_phone1 IS NOT NULL
	AND
	 B.job_number = A.job_number
	 AND
	 A.ord_bill_email_bus IS NOT NULL
  GROUP BY A.ord_contact_full_name,A.ord_customer_name, A.ord_cust_phone1, A.job_desc, A.ord_bill_email_bus)  F
  WHERE F.Customer = $P{pFromSalesOrder} --Parameter used as placehold for customer name 
  GROUP BY F.Customer, F.Phone, F.Email,F.Department) G
  ON D.Name = G.Customer
  WHERE Name = $P{pFromSalesOrder}
GROUP BY d.Name, d.[Total Revenue], C.[Job Total], D.Rank, C.[Work Type], C.Jobs, D.[First Name], G.Department, G.Email, G.Phone
ORDER BY C.[Job Total] DESC