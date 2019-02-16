import {Component, Input, OnInit, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, DoCheck} from '@angular/core';


declare var google:any;


@Component({
    template:'<div style="width:100%; height:100px" id="{{chartId}}">{{data|json}}</div>',
    selector:'chart'
})
export class LineChartComponent implements DoCheck{


    private _data:{[key: string]:number};
    private _differ: KeyValueDiffer<string, any>;

    @Input('chartId') chartId:any;

    @Input()
    set data(value: {[key: string]:number}){
        
        if (value){
            this.renderChart(value);
        }
    }

    get data(){
        return this._data;
    }

    constructor(private _differs: KeyValueDiffers) {}


    ngDoCheck(): void {

        if (this._differ){
            let changes = this._differ.diff(this.data);
            if (changes) {
                


            }
        }      
    }

    private renderChart(dataPoints){
        let dataPointsFormatted = [['day', 'value']];
       
        dataPoints.forEach((point, i) => {
            dataPointsFormatted.push([i, point]);
        })


        console.log(dataPointsFormatted);
        
        var data = google.visualization.arrayToDataTable(dataPointsFormatted);

      
       

        let options = {
          curveType: 'function',
          legend: 'none',
          title:'',
          axisFontSize : 0,
					chartArea: {'width': '100%', 'height': '80%'},
          backgroundColor: { fill:'transparent' },
          vAxis:{
							baselineColor: 'transparent',
							gridlineColor: 'transparent',
							textPosition: 'none'
					},
					hAxis:{
						baselineColor: 'transparent',
						gridlineColor: 'transparent',
						textPosition: 'none'
					},
					series: {
						0: {
								// set options for the first data series
								color: '#fff'
						}
					}
        };

        let chart = new google.visualization.AreaChart(document.getElementById(this.chartId));

        chart.draw(data, options);

    }


}