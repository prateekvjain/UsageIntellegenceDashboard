var loadTrendChart=function(){var a=new CanvasJS.Chart("s3TrendChart",{title:{text:"Usage Trend"},data:[{type:"line",dataPoints:[{x:new Date(2012,0,1),y:450},{x:new Date(2012,1,1),y:414},{x:new Date(2012,2,1),y:520},{x:new Date(2012,3,1),y:460},{x:new Date(2012,4,1),y:450},{x:new Date(2012,5,1),y:500},{x:new Date(2012,6,1),y:480},{x:new Date(2012,7,1),y:480},{x:new Date(2012,8,1),y:410},{x:new Date(2012,9,1),y:500},{x:new Date(2012,10,1),y:480},{x:new Date(2012,11,1),y:510}]}]});return a.render(),a};$(document).ready(function(){$("#trend").on("show.bs.modal",function(){setTimeout(function(){loadTrendChart()},251)})}),window.onload=function(){if("undefined"!=typeof CanvasJS){if(1===$("#dbEntnActChart").length){var a=new CanvasJS.Chart("dbEntnActChart",{title:{text:"Entitlements and Activations"},toolTip:{shared:!0},axisX:{title:"Products"},axisY:{title:""},axisY2:{title:""},legend:{verticalAlign:"top",horizontalAlign:"center"},data:[{type:"column",name:"Entitlements",legendText:"Entitlements",showInLegend:!0,dataPoints:[{label:"Product A",y:262},{label:"Product B",y:211},{label:"Product C",y:175},{label:"Product D",y:137},{label:"Product E",y:115}]},{type:"column",name:"Activations",legendText:"Activations",axisYType:"secondary",showInLegend:!0,dataPoints:[{label:"Product A",y:300},{label:"Product B",y:175},{label:"Product C",y:350},{label:"Product D",y:95},{label:"Product E",y:175}]}],legend:{cursor:"pointer",itemclick:function(b){b.dataSeries.visible="undefined"==typeof b.dataSeries.visible||b.dataSeries.visible?!1:!0,a.render()}}});a.render()}if(1===$("#dbCurrUsg").length){var a=new CanvasJS.Chart("dbCurrUsg",{title:{text:"Current Usage"},data:[{color:"#62C9C3",type:"bar",dataPoints:[{y:105,label:"Product C",indexLabel:"105%"},{y:90,label:"Product D",indexLabel:"90%"},{y:85,label:"Product B",indexLabel:"85%"},{y:80,label:"Product A",indexLabel:"80%"},{y:10,label:"Product E",indexLabel:"10%"}]}]});a.render()}}};