// Calc.js
// This file is for calculating the tax info for all filing types

$("button").click( function(event) {
	event.preventDefault();
});

// ----- Single Filer -----

$('#single-button').click(function() {
	var salary = $("#single-input").val();

	salary = parseInt(salary);

	var taxas = 0;
	var taxbs = 0;
	var taxps = 0;

	// The following section I decided to use several if else statements
	// instead of using a switch statement because of this stackoverflow
	// conversation: https://goo.gl/SmTki6

	if(salary<=9325) {
		taxas = salary*.10;

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxas = (932.5)+((salary-9325)*.15);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=37951 && salary<=91900) {
		taxas = (5226.25)+((salary-37950)*.25);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=91901 && salary<=191650) {
		taxas = (18713.75)+((salary-91900)*.28);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=191651 && salary<=416700) {
		taxas = (46643.75)+((salary-191650)*.33);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=416701 && salary<=418400) {
		taxas = (120910.25)+((salary-416700)*.35);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	}else if(salary>=418401) {
		taxas = (121505.25)+((salary-418400)*.396);

		taxas = Math.round(taxas);

		$("#tax-as").replaceWith("<h4 id=\"tax-as\" class=\"blue-font\">$"+ taxas + "</h4>");
	};

	if(salary<=9325) {
		taxbs = "10%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxbs = "15%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=37951 && salary<=91900) {
		taxbs = "25%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=91901 && salary<=191650) {
		taxbs = "28%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=191651 && salary<=416700) {
		taxbs = "33%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=416701 && salary<=418400) {
		taxbs = "35%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	}else if(salary>=418401) {
		taxbs = "39.6%";

		$("#tax-bs").replaceWith("<h4 id=\"tax-bs\" class=\"blue-font\">"+ taxbs + "</h4>");
	};

	if(salary<=9325) {
		taxps = salary*.10

		taxps = (taxpss/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxps = (932.5)+((salary-9325)*.15);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=37951 && salary<=91900) {
		taxps = (5226.25)+((salary-37950)*.25);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=91901 && salary<=191650) {
		taxps = (18713.75)+((salary-91900)*.28);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=191651 && salary<=416700) {
		taxps = (46643.75)+((salary-191650)*.33);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=416701 && salary<=418400) {
		taxps = (120910.25)+((salary-416700)*.35);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	}else if(salary>=418401) {
		taxas = (121505.25)+((salary-418400)*.396);

		taxps = (taxps/salary)*100;

		taxps = Math.round(taxps);

		$("#tax-ps").replaceWith("<h4 id=\"tax-ps\" class=\"blue-font\">"+ taxps + "%</h4>");
	};
});

// ----- Married, Filing Jointly -----

$('#joint-button').click(function() {
	var salary = $("#joint-input").val();

	salary = parseInt(salary);

	var taxaj = 0;
	var taxbj = 0;
	var taxpj = 0;

	// The following section I decided to use several if else statements
	// instead of using a switch statement because of this stackoverflow
	// conversation: https://goo.gl/SmTki6

	if(salary<=18650) {
		taxaj = salary*.10;

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=18651 && salary<=75900) {
		taxaj = (1865)+((salary-18650)*.15);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=75901 && salary<=153100) {
		taxaj = (10452.5)+((salary-75900)*.25);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=153101 && salary<=233350) {
		taxaj = (29752.5)+((salary-153100)*.28);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=233351 && salary<=416700) {
		taxaj = (52222.5)+((salary-233350)*.33);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=416701 && salary<=470700) {
		taxaj = (112728)+((salary-416700)*.35);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	}else if(salary>=470701) {
		taxaj = (131628)+((salary-470700)*.396);

		taxaj = Math.round(taxaj);

		$("#tax-aj").replaceWith("<h4 id=\"tax-aj\" class=\"blue-font\">$"+ taxaj + "</h4>");
	};

	if(salary<=18650) {
		taxbj = "10%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=18651 && salary<=75900) {
		taxbj = "15%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=75901 && salary<=153100) {
		taxbj = "25%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=153101 && salary<=233350) {
		taxbj = "28%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=233351 && salary<=416700) {
		taxbj = "33%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=416701 && salary<=470700) {
		taxbj = "35%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	}else if(salary>=470701) {
		taxbj = "39.6%";

		$("#tax-bj").replaceWith("<h4 id=\"tax-bj\" class=\"blue-font\">"+ taxbj + "</h4>");
	};

	if(salary<=18650) {
		taxpj = salary*.10

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=18651 && salary<=75900) {
		taxpj = (1865)+((salary-18650)*.15);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=75901 && salary<=153100) {
		taxpj = (10452.5)+((salary-75900)*.25);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=153101 && salary<=233350) {
		taxpj = (29752.5)+((salary-153100)*.28);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=233351 && salary<=416700) {
		taxpj = (52222.5)+((salary-233350)*.33);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=416701 && salary<=470700) {
		taxpj = (112728)+((salary-416700)*.35);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	}else if(salary>=470701){
		taxpj = (131628)+((salary-470700)*.396);

		taxpj = (taxpj/salary)*100;

		taxpj = Math.round(taxpj);

		$("#tax-pj").replaceWith("<h4 id=\"tax-pj\" class=\"blue-font\">"+ taxpj + "%</h4>");
	};
});

// ----- Married, Filing Seperately -----

$('#sep-button').click(function() {
	var salary = $("#sep-input").val();

	salary = parseInt(salary);

	var taxasp = 0;
	var taxbsp = 0;
	var taxpsp = 0;

	// The following section I decided to use several if else statements
	// instead of using a switch statement because of this stackoverflow
	// conversation: https://goo.gl/SmTki6

	if(salary<=9325) {
		taxasp = salary*.10;

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxasp = (9232.5)+((salary-9325)*.15);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=37951 && salary<=76550) {
		taxasp = (5226.25)+((salary-37950)*.25);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=76551 && salary<=116675) {
		taxasp = (14876.25)+((salary-76550)*.28);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=11676 && salary<=208350) {
		taxasp = (26111.25)+((salary-116675)*.33);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=208351 && salary<=235350) {
		taxasp = (56364)+((salary-208350)*.35);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	}else if(salary>=235351) {
		taxasp = (65814)+((salary-235350)*.396);

		taxasp = Math.round(taxasp);

		$("#tax-asp").replaceWith("<h4 id=\"tax-asp\" class=\"blue-font\">$"+ taxasp + "</h4>");
	};

	if(salary<=9325) {
		taxbsp = "10%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxbsp = "15%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=37951 && salary<=76550) {
		taxbsp = "25%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=76551 && salary<=116675) {
		taxbsp = "28%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=11676 && salary<=208350) {
		taxbsp = "33%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=208351 && salary<=235350) {
		taxbsp = "35%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	}else if(salary>=235351) {
		taxbsp = "39.6%";

		$("#tax-bsp").replaceWith("<h4 id=\"tax-bsp\" class=\"blue-font\">"+ taxbsp + "</h4>");
	};

	if(salary<=9325) {
		taxpsp = salary*.10

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=9326 && salary<=37950) {
		taxpsp = (9232.5)+((salary-9325)*.15);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=37951 && salary<=76550) {
		taxpsp = (5226.25)+((salary-37950)*.25);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=76551 && salary<=116675) {
		taxpsp = (14876.25)+((salary-76550)*.28);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=11676 && salary<=208350) {
		taxasp = (26111.25)+((salary-116675)*.33);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=208351 && salary<=235350) {
		taxpsp = (56364)+((salary-208350)*.35);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	}else if(salary>=235351) {
		taxpsp = (65814)+((salary-235350)*.396);

		taxpsp = (taxpsp/salary)*100;

		taxpsp = Math.round(taxpsp);

		$("#tax-psp").replaceWith("<h4 id=\"tax-psp\" class=\"blue-font\">"+ taxpsp + "%</h4>");
	};
});

// ----- Head Of Household -----

$('#headof-button').click(function() {
	var salary = $("#headof-input").val();

	salary = parseInt(salary);

	var taxah = 0;
	var taxbh = 0;
	var taxph = 0;

	// The following section I decided to use several if else statements
	// instead of using a switch statement because of this stackoverflow
	// conversation: https://goo.gl/SmTki6

	if(salary<=13350) {
		taxah = salary*.10;

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=13351 && salary<=50800) {
		taxah = (1335)+((salary-13350)*.15);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=50801 && salary<=131200) {
		taxah = (6952.5)+((salary-50800)*.25);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=131201 && salary<=212500) {
		taxah = (27052.5)+((salary-131200)*.28);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=212501 && salary<=416700) {
		taxah = (49816.5)+((salary-212500)*.33);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=416701 && salary<=444550) {
		taxah = (117202.5)+((salary-416700)*.35);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	}else if(salary>=444551) {
		taxah = (126950)+((salary-444550)*.396);

		taxah = Math.round(taxah);

		$("#tax-ah").replaceWith("<h4 id=\"tax-ah\" class=\"blue-font\">$"+ taxah + "</h4>");
	};

	if(salary<=13350) {
		taxbh = "10%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=13351 && salary<=50800) {
		taxbh = "15%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=50801 && salary<=131200) {
		taxbh = "25%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=131201 && salary<=212500) {
		taxbh = "28%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=212501 && salary<=416700) {
		taxbh = "33%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=416701 && salary<=444550) {
		taxbh = "35%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	}else if(salary>=444551) {
		taxbh = "39.6%";

		$("#tax-bh").replaceWith("<h4 id=\"tax-bh\" class=\"blue-font\">"+ taxbh + "</h4>");
	};

	if(salary<=13350) {
		taxph = salary*.10

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=13351 && salary<=50800) {
		taxph = (1335)+((salary-13350)*.15);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=50801 && salary<=131200) {
		taxph = (6952.5)+((salary-50800)*.25);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=131201 && salary<=212500) {
		taxph = (27052.5)+((salary-131200)*.28);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=212501 && salary<=416700) {
		taxph = (49816.5)+((salary-212500)*.33);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=416701 && salary<=444550) {
		taxph = (117202.5)+((salary-416700)*.35);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	}else if(salary>=444551) {
		taxph = (126950)+((salary-444550)*.396);

		taxph = (taxph/salary)*100;

		taxph = Math.round(taxph);

		$("#tax-ph").replaceWith("<h4 id=\"tax-ph\" class=\"blue-font\">"+ taxph + "%</h4>");
	};
});