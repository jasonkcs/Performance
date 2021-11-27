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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 343.0, "minX": 0.0, "maxY": 1832.0, "series": [{"data": [[0.0, 343.0], [0.1, 343.0], [0.2, 343.0], [0.3, 343.0], [0.4, 343.0], [0.5, 343.0], [0.6, 343.0], [0.7, 343.0], [0.8, 344.0], [0.9, 344.0], [1.0, 344.0], [1.1, 344.0], [1.2, 344.0], [1.3, 344.0], [1.4, 344.0], [1.5, 344.0], [1.6, 344.0], [1.7, 344.0], [1.8, 344.0], [1.9, 344.0], [2.0, 344.0], [2.1, 344.0], [2.2, 344.0], [2.3, 345.0], [2.4, 345.0], [2.5, 345.0], [2.6, 345.0], [2.7, 345.0], [2.8, 345.0], [2.9, 345.0], [3.0, 345.0], [3.1, 348.0], [3.2, 348.0], [3.3, 348.0], [3.4, 348.0], [3.5, 348.0], [3.6, 348.0], [3.7, 348.0], [3.8, 350.0], [3.9, 350.0], [4.0, 350.0], [4.1, 350.0], [4.2, 350.0], [4.3, 350.0], [4.4, 350.0], [4.5, 350.0], [4.6, 351.0], [4.7, 351.0], [4.8, 351.0], [4.9, 351.0], [5.0, 351.0], [5.1, 351.0], [5.2, 351.0], [5.3, 352.0], [5.4, 352.0], [5.5, 352.0], [5.6, 352.0], [5.7, 352.0], [5.8, 352.0], [5.9, 352.0], [6.0, 352.0], [6.1, 352.0], [6.2, 352.0], [6.3, 352.0], [6.4, 352.0], [6.5, 352.0], [6.6, 352.0], [6.7, 352.0], [6.8, 354.0], [6.9, 354.0], [7.0, 354.0], [7.1, 354.0], [7.2, 354.0], [7.3, 354.0], [7.4, 354.0], [7.5, 354.0], [7.6, 354.0], [7.7, 354.0], [7.8, 354.0], [7.9, 354.0], [8.0, 354.0], [8.1, 354.0], [8.2, 354.0], [8.3, 354.0], [8.4, 354.0], [8.5, 354.0], [8.6, 354.0], [8.7, 354.0], [8.8, 354.0], [8.9, 354.0], [9.0, 354.0], [9.1, 355.0], [9.2, 355.0], [9.3, 355.0], [9.4, 355.0], [9.5, 355.0], [9.6, 355.0], [9.7, 355.0], [9.8, 356.0], [9.9, 356.0], [10.0, 356.0], [10.1, 356.0], [10.2, 356.0], [10.3, 356.0], [10.4, 356.0], [10.5, 356.0], [10.6, 356.0], [10.7, 356.0], [10.8, 356.0], [10.9, 356.0], [11.0, 356.0], [11.1, 356.0], [11.2, 356.0], [11.3, 357.0], [11.4, 357.0], [11.5, 357.0], [11.6, 357.0], [11.7, 357.0], [11.8, 357.0], [11.9, 357.0], [12.0, 357.0], [12.1, 357.0], [12.2, 357.0], [12.3, 357.0], [12.4, 357.0], [12.5, 357.0], [12.6, 357.0], [12.7, 357.0], [12.8, 357.0], [12.9, 357.0], [13.0, 357.0], [13.1, 357.0], [13.2, 357.0], [13.3, 357.0], [13.4, 357.0], [13.5, 357.0], [13.6, 358.0], [13.7, 358.0], [13.8, 358.0], [13.9, 358.0], [14.0, 358.0], [14.1, 358.0], [14.2, 358.0], [14.3, 358.0], [14.4, 358.0], [14.5, 358.0], [14.6, 358.0], [14.7, 358.0], [14.8, 358.0], [14.9, 358.0], [15.0, 358.0], [15.1, 360.0], [15.2, 360.0], [15.3, 360.0], [15.4, 360.0], [15.5, 360.0], [15.6, 360.0], [15.7, 360.0], [15.8, 360.0], [15.9, 360.0], [16.0, 360.0], [16.1, 360.0], [16.2, 360.0], [16.3, 360.0], [16.4, 360.0], [16.5, 360.0], [16.6, 363.0], [16.7, 363.0], [16.8, 363.0], [16.9, 363.0], [17.0, 363.0], [17.1, 363.0], [17.2, 363.0], [17.3, 364.0], [17.4, 364.0], [17.5, 364.0], [17.6, 364.0], [17.7, 364.0], [17.8, 364.0], [17.9, 364.0], [18.0, 364.0], [18.1, 364.0], [18.2, 364.0], [18.3, 364.0], [18.4, 364.0], [18.5, 364.0], [18.6, 364.0], [18.7, 364.0], [18.8, 364.0], [18.9, 364.0], [19.0, 364.0], [19.1, 364.0], [19.2, 364.0], [19.3, 364.0], [19.4, 364.0], [19.5, 364.0], [19.6, 364.0], [19.7, 364.0], [19.8, 364.0], [19.9, 364.0], [20.0, 364.0], [20.1, 364.0], [20.2, 364.0], [20.3, 364.0], [20.4, 364.0], [20.5, 364.0], [20.6, 364.0], [20.7, 364.0], [20.8, 364.0], [20.9, 364.0], [21.0, 364.0], [21.1, 365.0], [21.2, 365.0], [21.3, 365.0], [21.4, 365.0], [21.5, 365.0], [21.6, 365.0], [21.7, 365.0], [21.8, 365.0], [21.9, 366.0], [22.0, 366.0], [22.1, 366.0], [22.2, 366.0], [22.3, 366.0], [22.4, 366.0], [22.5, 366.0], [22.6, 367.0], [22.7, 367.0], [22.8, 367.0], [22.9, 367.0], [23.0, 367.0], [23.1, 367.0], [23.2, 367.0], [23.3, 367.0], [23.4, 368.0], [23.5, 368.0], [23.6, 368.0], [23.7, 368.0], [23.8, 368.0], [23.9, 368.0], [24.0, 368.0], [24.1, 370.0], [24.2, 370.0], [24.3, 370.0], [24.4, 370.0], [24.5, 370.0], [24.6, 370.0], [24.7, 370.0], [24.8, 370.0], [24.9, 371.0], [25.0, 371.0], [25.1, 371.0], [25.2, 371.0], [25.3, 371.0], [25.4, 371.0], [25.5, 371.0], [25.6, 372.0], [25.7, 372.0], [25.8, 372.0], [25.9, 372.0], [26.0, 372.0], [26.1, 372.0], [26.2, 372.0], [26.3, 372.0], [26.4, 373.0], [26.5, 373.0], [26.6, 373.0], [26.7, 373.0], [26.8, 373.0], [26.9, 373.0], [27.0, 373.0], [27.1, 374.0], [27.2, 374.0], [27.3, 374.0], [27.4, 374.0], [27.5, 374.0], [27.6, 374.0], [27.7, 374.0], [27.8, 374.0], [27.9, 374.0], [28.0, 374.0], [28.1, 374.0], [28.2, 374.0], [28.3, 374.0], [28.4, 374.0], [28.5, 374.0], [28.6, 375.0], [28.7, 375.0], [28.8, 375.0], [28.9, 375.0], [29.0, 375.0], [29.1, 375.0], [29.2, 375.0], [29.3, 375.0], [29.4, 376.0], [29.5, 376.0], [29.6, 376.0], [29.7, 376.0], [29.8, 376.0], [29.9, 376.0], [30.0, 376.0], [30.1, 377.0], [30.2, 377.0], [30.3, 377.0], [30.4, 377.0], [30.5, 377.0], [30.6, 377.0], [30.7, 377.0], [30.8, 377.0], [30.9, 377.0], [31.0, 377.0], [31.1, 377.0], [31.2, 377.0], [31.3, 377.0], [31.4, 377.0], [31.5, 377.0], [31.6, 378.0], [31.7, 378.0], [31.8, 378.0], [31.9, 378.0], [32.0, 378.0], [32.1, 378.0], [32.2, 378.0], [32.3, 378.0], [32.4, 379.0], [32.5, 379.0], [32.6, 379.0], [32.7, 379.0], [32.8, 379.0], [32.9, 379.0], [33.0, 379.0], [33.1, 379.0], [33.2, 379.0], [33.3, 379.0], [33.4, 379.0], [33.5, 379.0], [33.6, 379.0], [33.7, 379.0], [33.8, 379.0], [33.9, 382.0], [34.0, 382.0], [34.1, 382.0], [34.2, 382.0], [34.3, 382.0], [34.4, 382.0], [34.5, 382.0], [34.6, 382.0], [34.7, 382.0], [34.8, 382.0], [34.9, 382.0], [35.0, 382.0], [35.1, 382.0], [35.2, 382.0], [35.3, 382.0], [35.4, 383.0], [35.5, 383.0], [35.6, 383.0], [35.7, 383.0], [35.8, 383.0], [35.9, 383.0], [36.0, 383.0], [36.1, 385.0], [36.2, 385.0], [36.3, 385.0], [36.4, 385.0], [36.5, 385.0], [36.6, 385.0], [36.7, 385.0], [36.8, 385.0], [36.9, 386.0], [37.0, 386.0], [37.1, 386.0], [37.2, 386.0], [37.3, 386.0], [37.4, 386.0], [37.5, 386.0], [37.6, 387.0], [37.7, 387.0], [37.8, 387.0], [37.9, 387.0], [38.0, 387.0], [38.1, 387.0], [38.2, 387.0], [38.3, 387.0], [38.4, 389.0], [38.5, 389.0], [38.6, 389.0], [38.7, 389.0], [38.8, 389.0], [38.9, 389.0], [39.0, 389.0], [39.1, 389.0], [39.2, 389.0], [39.3, 389.0], [39.4, 389.0], [39.5, 389.0], [39.6, 389.0], [39.7, 389.0], [39.8, 389.0], [39.9, 390.0], [40.0, 390.0], [40.1, 390.0], [40.2, 390.0], [40.3, 390.0], [40.4, 390.0], [40.5, 390.0], [40.6, 390.0], [40.7, 392.0], [40.8, 392.0], [40.9, 392.0], [41.0, 392.0], [41.1, 392.0], [41.2, 392.0], [41.3, 392.0], [41.4, 392.0], [41.5, 392.0], [41.6, 392.0], [41.7, 392.0], [41.8, 392.0], [41.9, 392.0], [42.0, 392.0], [42.1, 392.0], [42.2, 393.0], [42.3, 393.0], [42.4, 393.0], [42.5, 393.0], [42.6, 393.0], [42.7, 393.0], [42.8, 393.0], [42.9, 394.0], [43.0, 394.0], [43.1, 394.0], [43.2, 394.0], [43.3, 394.0], [43.4, 394.0], [43.5, 394.0], [43.6, 394.0], [43.7, 399.0], [43.8, 399.0], [43.9, 399.0], [44.0, 399.0], [44.1, 399.0], [44.2, 399.0], [44.3, 399.0], [44.4, 399.0], [44.5, 399.0], [44.6, 399.0], [44.7, 399.0], [44.8, 399.0], [44.9, 399.0], [45.0, 399.0], [45.1, 399.0], [45.2, 402.0], [45.3, 402.0], [45.4, 402.0], [45.5, 402.0], [45.6, 402.0], [45.7, 402.0], [45.8, 402.0], [45.9, 404.0], [46.0, 404.0], [46.1, 404.0], [46.2, 404.0], [46.3, 404.0], [46.4, 404.0], [46.5, 404.0], [46.6, 404.0], [46.7, 409.0], [46.8, 409.0], [46.9, 409.0], [47.0, 409.0], [47.1, 409.0], [47.2, 409.0], [47.3, 409.0], [47.4, 410.0], [47.5, 410.0], [47.6, 410.0], [47.7, 410.0], [47.8, 410.0], [47.9, 410.0], [48.0, 410.0], [48.1, 410.0], [48.2, 411.0], [48.3, 411.0], [48.4, 411.0], [48.5, 411.0], [48.6, 411.0], [48.7, 411.0], [48.8, 411.0], [48.9, 415.0], [49.0, 415.0], [49.1, 415.0], [49.2, 415.0], [49.3, 415.0], [49.4, 415.0], [49.5, 415.0], [49.6, 415.0], [49.7, 415.0], [49.8, 415.0], [49.9, 415.0], [50.0, 415.0], [50.1, 415.0], [50.2, 415.0], [50.3, 415.0], [50.4, 417.0], [50.5, 417.0], [50.6, 417.0], [50.7, 417.0], [50.8, 417.0], [50.9, 417.0], [51.0, 417.0], [51.1, 417.0], [51.2, 418.0], [51.3, 418.0], [51.4, 418.0], [51.5, 418.0], [51.6, 418.0], [51.7, 418.0], [51.8, 418.0], [51.9, 421.0], [52.0, 421.0], [52.1, 421.0], [52.2, 421.0], [52.3, 421.0], [52.4, 421.0], [52.5, 421.0], [52.6, 421.0], [52.7, 421.0], [52.8, 421.0], [52.9, 421.0], [53.0, 421.0], [53.1, 421.0], [53.2, 421.0], [53.3, 421.0], [53.4, 421.0], [53.5, 421.0], [53.6, 421.0], [53.7, 421.0], [53.8, 421.0], [53.9, 421.0], [54.0, 421.0], [54.1, 421.0], [54.2, 422.0], [54.3, 422.0], [54.4, 422.0], [54.5, 422.0], [54.6, 422.0], [54.7, 422.0], [54.8, 422.0], [54.9, 424.0], [55.0, 424.0], [55.1, 424.0], [55.2, 424.0], [55.3, 424.0], [55.4, 424.0], [55.5, 424.0], [55.6, 424.0], [55.7, 426.0], [55.8, 426.0], [55.9, 426.0], [56.0, 426.0], [56.1, 426.0], [56.2, 426.0], [56.3, 426.0], [56.4, 430.0], [56.5, 430.0], [56.6, 430.0], [56.7, 430.0], [56.8, 430.0], [56.9, 430.0], [57.0, 430.0], [57.1, 430.0], [57.2, 432.0], [57.3, 432.0], [57.4, 432.0], [57.5, 432.0], [57.6, 432.0], [57.7, 432.0], [57.8, 432.0], [57.9, 433.0], [58.0, 433.0], [58.1, 433.0], [58.2, 433.0], [58.3, 433.0], [58.4, 433.0], [58.5, 433.0], [58.6, 433.0], [58.7, 439.0], [58.8, 439.0], [58.9, 439.0], [59.0, 439.0], [59.1, 439.0], [59.2, 439.0], [59.3, 439.0], [59.4, 441.0], [59.5, 441.0], [59.6, 441.0], [59.7, 441.0], [59.8, 441.0], [59.9, 441.0], [60.0, 441.0], [60.1, 441.0], [60.2, 441.0], [60.3, 441.0], [60.4, 441.0], [60.5, 441.0], [60.6, 441.0], [60.7, 441.0], [60.8, 441.0], [60.9, 441.0], [61.0, 442.0], [61.1, 442.0], [61.2, 442.0], [61.3, 442.0], [61.4, 442.0], [61.5, 442.0], [61.6, 442.0], [61.7, 448.0], [61.8, 448.0], [61.9, 448.0], [62.0, 448.0], [62.1, 448.0], [62.2, 448.0], [62.3, 448.0], [62.4, 448.0], [62.5, 449.0], [62.6, 449.0], [62.7, 449.0], [62.8, 449.0], [62.9, 449.0], [63.0, 449.0], [63.1, 449.0], [63.2, 450.0], [63.3, 450.0], [63.4, 450.0], [63.5, 450.0], [63.6, 450.0], [63.7, 450.0], [63.8, 450.0], [63.9, 450.0], [64.0, 454.0], [64.1, 454.0], [64.2, 454.0], [64.3, 454.0], [64.4, 454.0], [64.5, 454.0], [64.6, 454.0], [64.7, 455.0], [64.8, 455.0], [64.9, 455.0], [65.0, 455.0], [65.1, 455.0], [65.2, 455.0], [65.3, 455.0], [65.4, 455.0], [65.5, 461.0], [65.6, 461.0], [65.7, 461.0], [65.8, 461.0], [65.9, 461.0], [66.0, 461.0], [66.1, 461.0], [66.2, 466.0], [66.3, 466.0], [66.4, 466.0], [66.5, 466.0], [66.6, 466.0], [66.7, 466.0], [66.8, 466.0], [66.9, 466.0], [67.0, 467.0], [67.1, 467.0], [67.2, 467.0], [67.3, 467.0], [67.4, 467.0], [67.5, 467.0], [67.6, 467.0], [67.7, 470.0], [67.8, 470.0], [67.9, 470.0], [68.0, 470.0], [68.1, 470.0], [68.2, 470.0], [68.3, 470.0], [68.4, 470.0], [68.5, 470.0], [68.6, 470.0], [68.7, 470.0], [68.8, 470.0], [68.9, 470.0], [69.0, 470.0], [69.1, 470.0], [69.2, 471.0], [69.3, 471.0], [69.4, 471.0], [69.5, 471.0], [69.6, 471.0], [69.7, 471.0], [69.8, 471.0], [69.9, 471.0], [70.0, 476.0], [70.1, 476.0], [70.2, 476.0], [70.3, 476.0], [70.4, 476.0], [70.5, 476.0], [70.6, 476.0], [70.7, 481.0], [70.8, 481.0], [70.9, 481.0], [71.0, 481.0], [71.1, 481.0], [71.2, 481.0], [71.3, 481.0], [71.4, 481.0], [71.5, 486.0], [71.6, 486.0], [71.7, 486.0], [71.8, 486.0], [71.9, 486.0], [72.0, 486.0], [72.1, 486.0], [72.2, 489.0], [72.3, 489.0], [72.4, 489.0], [72.5, 489.0], [72.6, 489.0], [72.7, 489.0], [72.8, 489.0], [72.9, 489.0], [73.0, 489.0], [73.1, 489.0], [73.2, 489.0], [73.3, 489.0], [73.4, 489.0], [73.5, 489.0], [73.6, 489.0], [73.7, 492.0], [73.8, 492.0], [73.9, 492.0], [74.0, 492.0], [74.1, 492.0], [74.2, 492.0], [74.3, 492.0], [74.4, 492.0], [74.5, 493.0], [74.6, 493.0], [74.7, 493.0], [74.8, 493.0], [74.9, 493.0], [75.0, 493.0], [75.1, 493.0], [75.2, 495.0], [75.3, 495.0], [75.4, 495.0], [75.5, 495.0], [75.6, 495.0], [75.7, 495.0], [75.8, 495.0], [75.9, 495.0], [76.0, 495.0], [76.1, 495.0], [76.2, 495.0], [76.3, 495.0], [76.4, 495.0], [76.5, 495.0], [76.6, 495.0], [76.7, 495.0], [76.8, 495.0], [76.9, 495.0], [77.0, 495.0], [77.1, 495.0], [77.2, 495.0], [77.3, 495.0], [77.4, 495.0], [77.5, 501.0], [77.6, 501.0], [77.7, 501.0], [77.8, 501.0], [77.9, 501.0], [78.0, 501.0], [78.1, 501.0], [78.2, 501.0], [78.3, 501.0], [78.4, 501.0], [78.5, 501.0], [78.6, 501.0], [78.7, 501.0], [78.8, 501.0], [78.9, 501.0], [79.0, 510.0], [79.1, 510.0], [79.2, 510.0], [79.3, 510.0], [79.4, 510.0], [79.5, 510.0], [79.6, 510.0], [79.7, 513.0], [79.8, 513.0], [79.9, 513.0], [80.0, 513.0], [80.1, 513.0], [80.2, 513.0], [80.3, 513.0], [80.4, 513.0], [80.5, 517.0], [80.6, 517.0], [80.7, 517.0], [80.8, 517.0], [80.9, 517.0], [81.0, 517.0], [81.1, 517.0], [81.2, 517.0], [81.3, 529.0], [81.4, 529.0], [81.5, 529.0], [81.6, 529.0], [81.7, 529.0], [81.8, 529.0], [81.9, 529.0], [82.0, 534.0], [82.1, 534.0], [82.2, 534.0], [82.3, 534.0], [82.4, 534.0], [82.5, 534.0], [82.6, 534.0], [82.7, 534.0], [82.8, 534.0], [82.9, 534.0], [83.0, 534.0], [83.1, 534.0], [83.2, 534.0], [83.3, 534.0], [83.4, 534.0], [83.5, 537.0], [83.6, 537.0], [83.7, 537.0], [83.8, 537.0], [83.9, 537.0], [84.0, 537.0], [84.1, 537.0], [84.2, 537.0], [84.3, 545.0], [84.4, 545.0], [84.5, 545.0], [84.6, 545.0], [84.7, 545.0], [84.8, 545.0], [84.9, 545.0], [85.0, 562.0], [85.1, 562.0], [85.2, 562.0], [85.3, 562.0], [85.4, 562.0], [85.5, 562.0], [85.6, 562.0], [85.7, 562.0], [85.8, 564.0], [85.9, 564.0], [86.0, 564.0], [86.1, 564.0], [86.2, 564.0], [86.3, 564.0], [86.4, 564.0], [86.5, 569.0], [86.6, 569.0], [86.7, 569.0], [86.8, 569.0], [86.9, 569.0], [87.0, 569.0], [87.1, 569.0], [87.2, 569.0], [87.3, 579.0], [87.4, 579.0], [87.5, 579.0], [87.6, 579.0], [87.7, 579.0], [87.8, 579.0], [87.9, 579.0], [88.0, 582.0], [88.1, 582.0], [88.2, 582.0], [88.3, 582.0], [88.4, 582.0], [88.5, 582.0], [88.6, 582.0], [88.7, 582.0], [88.8, 584.0], [88.9, 584.0], [89.0, 584.0], [89.1, 584.0], [89.2, 584.0], [89.3, 584.0], [89.4, 584.0], [89.5, 586.0], [89.6, 586.0], [89.7, 586.0], [89.8, 586.0], [89.9, 586.0], [90.0, 586.0], [90.1, 586.0], [90.2, 586.0], [90.3, 588.0], [90.4, 588.0], [90.5, 588.0], [90.6, 588.0], [90.7, 588.0], [90.8, 588.0], [90.9, 588.0], [91.0, 598.0], [91.1, 598.0], [91.2, 598.0], [91.3, 598.0], [91.4, 598.0], [91.5, 598.0], [91.6, 598.0], [91.7, 598.0], [91.8, 609.0], [91.9, 609.0], [92.0, 609.0], [92.1, 609.0], [92.2, 609.0], [92.3, 609.0], [92.4, 609.0], [92.5, 609.0], [92.6, 609.0], [92.7, 609.0], [92.8, 609.0], [92.9, 609.0], [93.0, 609.0], [93.1, 609.0], [93.2, 609.0], [93.3, 647.0], [93.4, 647.0], [93.5, 647.0], [93.6, 647.0], [93.7, 647.0], [93.8, 647.0], [93.9, 647.0], [94.0, 687.0], [94.1, 687.0], [94.2, 687.0], [94.3, 687.0], [94.4, 687.0], [94.5, 687.0], [94.6, 687.0], [94.7, 687.0], [94.8, 704.0], [94.9, 704.0], [95.0, 704.0], [95.1, 704.0], [95.2, 704.0], [95.3, 704.0], [95.4, 704.0], [95.5, 785.0], [95.6, 785.0], [95.7, 785.0], [95.8, 785.0], [95.9, 785.0], [96.0, 785.0], [96.1, 785.0], [96.2, 785.0], [96.3, 822.0], [96.4, 822.0], [96.5, 822.0], [96.6, 822.0], [96.7, 822.0], [96.8, 822.0], [96.9, 822.0], [97.0, 835.0], [97.1, 835.0], [97.2, 835.0], [97.3, 835.0], [97.4, 835.0], [97.5, 835.0], [97.6, 835.0], [97.7, 835.0], [97.8, 836.0], [97.9, 836.0], [98.0, 836.0], [98.1, 836.0], [98.2, 836.0], [98.3, 836.0], [98.4, 836.0], [98.5, 930.0], [98.6, 930.0], [98.7, 930.0], [98.8, 930.0], [98.9, 930.0], [99.0, 930.0], [99.1, 930.0], [99.2, 930.0], [99.3, 1832.0], [99.4, 1832.0], [99.5, 1832.0], [99.6, 1832.0], [99.7, 1832.0], [99.8, 1832.0], [99.9, 1832.0], [100.0, 1832.0]], "isOverall": false, "label": "login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 60.0, "series": [{"data": [[300.0, 60.0], [600.0, 4.0], [700.0, 2.0], [400.0, 43.0], [800.0, 3.0], [1800.0, 1.0], [900.0, 1.0], [500.0, 19.0]], "isOverall": false, "label": "login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 133.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 133.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 133.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.637959328E12, "maxY": 20.0, "series": [{"data": [[1.637959354E12, 11.0], [1.637959332E12, 13.0], [1.637959352E12, 17.916666666666668], [1.63795933E12, 10.0], [1.63795935E12, 20.0], [1.637959338E12, 20.0], [1.637959336E12, 20.0], [1.637959356E12, 4.0], [1.637959334E12, 17.375], [1.637959344E12, 20.0], [1.637959342E12, 20.0], [1.63795934E12, 20.0], [1.637959328E12, 7.0], [1.637959348E12, 20.0], [1.637959346E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.637959356E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 343.0, "minX": 1.0, "maxY": 1140.5, "series": [{"data": [[8.0, 592.3333333333334], [2.0, 836.0], [9.0, 481.0], [10.0, 835.0], [11.0, 388.6666666666667], [12.0, 432.6], [3.0, 534.0], [13.0, 489.0], [14.0, 470.0], [15.0, 382.75], [16.0, 392.0], [4.0, 822.0], [1.0, 343.0], [17.0, 421.0], [18.0, 479.4], [19.0, 530.5], [20.0, 431.19999999999993], [5.0, 785.0], [6.0, 1140.5], [7.0, 489.0]], "isOverall": false, "label": "login", "isController": false}, {"data": [[17.496240601503764, 459.44360902255625]], "isOverall": false, "label": "login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 628.0, "minX": 1.637959328E12, "maxY": 16388.0, "series": [{"data": [[1.637959354E12, 7645.0], [1.637959332E12, 8742.0], [1.637959352E12, 13110.0], [1.63795933E12, 3276.0], [1.63795935E12, 10922.0], [1.637959338E12, 15290.0], [1.637959336E12, 10922.0], [1.637959356E12, 7645.0], [1.637959334E12, 8736.0], [1.637959344E12, 8740.0], [1.637959342E12, 16388.0], [1.63795934E12, 6555.0], [1.637959328E12, 2187.0], [1.637959348E12, 9830.0], [1.637959346E12, 15289.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.637959354E12, 2198.0], [1.637959332E12, 2512.0], [1.637959352E12, 3768.0], [1.63795933E12, 942.0], [1.63795935E12, 3140.0], [1.637959338E12, 4396.0], [1.637959336E12, 3140.0], [1.637959356E12, 2198.0], [1.637959334E12, 2512.0], [1.637959344E12, 2512.0], [1.637959342E12, 4710.0], [1.63795934E12, 1884.0], [1.637959328E12, 628.0], [1.637959348E12, 2826.0], [1.637959346E12, 4396.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.637959356E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 386.75, "minX": 1.637959328E12, "maxY": 1131.0, "series": [{"data": [[1.637959354E12, 599.2857142857142], [1.637959332E12, 410.125], [1.637959352E12, 492.4166666666667], [1.63795933E12, 397.0], [1.63795935E12, 460.7], [1.637959338E12, 424.5], [1.637959336E12, 408.2], [1.637959356E12, 608.2857142857143], [1.637959334E12, 434.25], [1.637959344E12, 386.75], [1.637959342E12, 455.93333333333334], [1.63795934E12, 413.1666666666667], [1.637959328E12, 1131.0], [1.637959348E12, 406.55555555555554], [1.637959346E12, 416.6428571428571]], "isOverall": false, "label": "login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.637959356E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 386.0, "minX": 1.637959328E12, "maxY": 1128.5, "series": [{"data": [[1.637959354E12, 598.5714285714286], [1.637959332E12, 409.75], [1.637959352E12, 491.8333333333333], [1.63795933E12, 396.3333333333333], [1.63795935E12, 460.4], [1.637959338E12, 424.2857142857143], [1.637959336E12, 407.5], [1.637959356E12, 608.0], [1.637959334E12, 433.99999999999994], [1.637959344E12, 386.0], [1.637959342E12, 455.59999999999997], [1.63795934E12, 412.5], [1.637959328E12, 1128.5], [1.637959348E12, 406.0], [1.637959346E12, 416.2857142857142]], "isOverall": false, "label": "login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.637959356E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.637959328E12, "maxY": 705.0, "series": [{"data": [[1.637959354E12, 0.0], [1.637959332E12, 35.875], [1.637959352E12, 0.0], [1.63795933E12, 41.33333333333333], [1.63795935E12, 0.0], [1.637959338E12, 16.78571428571428], [1.637959336E12, 25.5], [1.637959356E12, 0.0], [1.637959334E12, 28.625], [1.637959344E12, 0.0], [1.637959342E12, 0.0], [1.63795934E12, 0.0], [1.637959328E12, 705.0], [1.637959348E12, 0.0], [1.637959346E12, 0.0]], "isOverall": false, "label": "login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.637959356E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 374.0, "minX": 1.0, "maxY": 680.0, "series": [{"data": [[1.0, 680.0], [2.0, 378.5], [4.0, 395.5], [8.0, 374.0], [9.0, 411.0], [5.0, 392.0], [11.0, 493.0], [6.0, 440.0], [3.0, 400.0], [7.0, 534.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 373.5, "minX": 1.0, "maxY": 679.5, "series": [{"data": [[1.0, 679.5], [2.0, 378.5], [4.0, 395.0], [8.0, 373.5], [9.0, 411.0], [5.0, 392.0], [11.0, 492.0], [6.0, 439.5], [3.0, 399.5], [7.0, 534.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.637959326E12, "maxY": 6.5, "series": [{"data": [[1.637959354E12, 5.5], [1.637959332E12, 3.0], [1.637959352E12, 5.5], [1.63795933E12, 3.0], [1.63795935E12, 4.5], [1.637959338E12, 6.5], [1.637959336E12, 4.5], [1.637959356E12, 0.5], [1.637959334E12, 4.5], [1.637959344E12, 4.5], [1.637959342E12, 6.5], [1.63795934E12, 4.5], [1.637959328E12, 1.0], [1.637959348E12, 5.5], [1.637959326E12, 0.5], [1.637959346E12, 6.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.637959356E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.637959328E12, "maxY": 7.5, "series": [{"data": [[1.637959354E12, 3.5], [1.637959332E12, 4.0], [1.637959352E12, 6.0], [1.63795933E12, 1.5], [1.63795935E12, 5.0], [1.637959338E12, 7.0], [1.637959336E12, 5.0], [1.637959356E12, 3.5], [1.637959334E12, 4.0], [1.637959344E12, 4.0], [1.637959342E12, 7.5], [1.63795934E12, 3.0], [1.637959328E12, 1.0], [1.637959348E12, 4.5], [1.637959346E12, 7.0]], "isOverall": false, "label": "419", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.637959356E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.637959328E12, "maxY": 7.5, "series": [{"data": [[1.637959354E12, 3.5], [1.637959332E12, 4.0], [1.637959352E12, 6.0], [1.63795933E12, 1.5], [1.63795935E12, 5.0], [1.637959338E12, 7.0], [1.637959336E12, 5.0], [1.637959356E12, 3.5], [1.637959334E12, 4.0], [1.637959344E12, 4.0], [1.637959342E12, 7.5], [1.63795934E12, 3.0], [1.637959328E12, 1.0], [1.637959348E12, 4.5], [1.637959346E12, 7.0]], "isOverall": false, "label": "login-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.637959356E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.637959328E12, "maxY": 7.5, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.637959354E12, 3.5], [1.637959332E12, 4.0], [1.637959352E12, 6.0], [1.63795933E12, 1.5], [1.63795935E12, 5.0], [1.637959338E12, 7.0], [1.637959336E12, 5.0], [1.637959356E12, 3.5], [1.637959334E12, 4.0], [1.637959344E12, 4.0], [1.637959342E12, 7.5], [1.63795934E12, 3.0], [1.637959328E12, 1.0], [1.637959348E12, 4.5], [1.637959346E12, 7.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.637959356E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

