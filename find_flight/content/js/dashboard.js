/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8618197278911565, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.961038961038961, 500, 1500, "welcome-1"], "isController": false}, {"data": [0.9928571428571429, 500, 1500, "Find flights-1"], "isController": false}, {"data": [1.0, 500, 1500, "welcome-2"], "isController": false}, {"data": [1.0, 500, 1500, "Find flights-2"], "isController": false}, {"data": [0.9857142857142858, 500, 1500, "Find flights-3"], "isController": false}, {"data": [1.0, 500, 1500, "welcome-0"], "isController": false}, {"data": [0.9785714285714285, 500, 1500, "Find flights-4"], "isController": false}, {"data": [0.9642857142857143, 500, 1500, "Find flights-5"], "isController": false}, {"data": [0.9928571428571429, 500, 1500, "Find flights-6"], "isController": false}, {"data": [0.9545454545454546, 500, 1500, "welcome-5"], "isController": false}, {"data": [0.9935064935064936, 500, 1500, "welcome-6"], "isController": false}, {"data": [0.9805194805194806, 500, 1500, "welcome-3"], "isController": false}, {"data": [0.987012987012987, 500, 1500, "welcome-4"], "isController": false}, {"data": [0.0, 500, 1500, "Find flights"], "isController": false}, {"data": [0.0, 500, 1500, "welcome"], "isController": false}, {"data": [1.0, 500, 1500, "Find flights-0"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1176, 0, 0.0, 455.4226190476188, 9, 3651, 263.0, 1632.0, 1709.1499999999999, 2532.8300000000004, 38.739005830615675, 688.0395429802023, 34.76899633939454], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["welcome-1", 77, 0, 0.0, 414.01298701298714, 316, 1975, 370.0, 438.8, 510.5999999999998, 1975.0, 2.6505111700113595, 3.759955552304568, 1.1466566878076487], "isController": false}, {"data": ["Find flights-1", 70, 0, 0.0, 359.2857142857144, 315, 806, 343.5, 397.6, 428.15000000000003, 806.0, 2.762976119992106, 4.040852575488454, 1.5487776297612], "isController": false}, {"data": ["welcome-2", 77, 0, 0.0, 15.662337662337665, 9, 36, 13.0, 24.200000000000003, 26.0, 36.0, 2.8471066740617488, 83.70048761323719, 1.3484831415233869], "isController": false}, {"data": ["Find flights-2", 70, 0, 0.0, 12.299999999999999, 9, 29, 12.0, 15.0, 16.0, 29.0, 2.7982091461464664, 82.26297669491527, 1.6532388021666136], "isController": false}, {"data": ["Find flights-3", 70, 0, 0.0, 281.6, 228, 886, 261.0, 275.8, 465.70000000000005, 886.0, 2.770411999841691, 22.694729662207624, 1.5854115545969052], "isController": false}, {"data": ["welcome-0", 77, 0, 0.0, 252.46753246753246, 216, 437, 229.0, 342.2, 354.29999999999995, 437.0, 2.660217654171705, 0.569203176282605, 1.1508558796856105], "isController": false}, {"data": ["Find flights-4", 70, 0, 0.0, 287.02857142857135, 233, 988, 259.0, 280.3, 601.900000000001, 988.0, 2.768111357165454, 24.431633519357007, 1.5895014433723504], "isController": false}, {"data": ["Find flights-5", 70, 0, 0.0, 362.2142857142858, 237, 1201, 320.5, 428.39999999999986, 788.6500000000008, 1201.0, 2.757533976757928, 59.26589890683474, 1.5807348089422886], "isController": false}, {"data": ["Find flights-6", 70, 0, 0.0, 242.89999999999995, 227, 592, 233.5, 244.9, 248.9, 592.0, 2.765158996642307, 4.057623938376456, 1.5905064931858581], "isController": false}, {"data": ["welcome-5", 77, 0, 0.0, 376.79220779220776, 239, 1202, 320.0, 492.0000000000001, 1087.1999999999994, 1202.0, 2.818654367083974, 60.62073026484369, 1.285460536550992], "isController": false}, {"data": ["welcome-6", 77, 0, 0.0, 243.2337662337663, 223, 683, 233.0, 243.4, 262.79999999999944, 683.0, 2.8584156210557574, 4.18937989550078, 1.3091766858155767], "isController": false}, {"data": ["welcome-3", 77, 0, 0.0, 283.844155844156, 242, 917, 262.0, 276.4, 339.49999999999693, 917.0, 2.8244442814173576, 23.162284326626807, 1.2853428077543834], "isController": false}, {"data": ["welcome-4", 77, 0, 0.0, 276.8831168831169, 225, 996, 263.0, 278.8, 370.0999999999999, 996.0, 2.8226841159866565, 24.900285304171707, 1.2900548498845266], "isController": false}, {"data": ["Find flights", 70, 0, 0.0, 1771.2714285714285, 1512, 3195, 1662.5, 2370.6, 2637.0000000000005, 3195.0, 2.6246719160104988, 186.5176887068804, 10.649913877952756], "isController": false}, {"data": ["welcome", 77, 0, 0.0, 1874.7662337662337, 1539, 3651, 1715.0, 2519.2, 2860.9999999999977, 3651.0, 2.5364825246236453, 180.15553069514445, 8.028066271782455], "isController": false}, {"data": ["Find flights-0", 70, 0, 0.0, 223.07142857142858, 211, 240, 222.0, 229.0, 231.9, 240.0, 2.781862258077336, 0.6248323431228391, 1.7006306382386838], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1176, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
