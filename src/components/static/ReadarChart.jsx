import React, { Component } from "react";
import Chart from 'chart.js/auto';

class RadarChart extends Component{
    chartRef = React.createRef();
    componentDidMount(){
        const colors = [];

        for (let i = 0; i < 7; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(2);

        const color = `rgba(${r}, ${g}, ${b}, 0.2)`;
        colors.push(color);
        }
        const color1 = colors[0];
        const color2 = colors[1];
        const color3 = colors[2];
        const color4 = colors[3];
        const color5 = colors[4];
        const color6 = colors[5];
        const color7 = colors[6];
        const myChartRef = this.chartRef.current.getContext("2d");
        if(this.props.datos.buildUp){
            const BUILDUP = this.props.datos.buildUp;
            let ourLabels = Object.keys(BUILDUP);
            const  ARRAY_DATA = [];
            const dataSet = [];
            console.log(Object.keys(BUILDUP)[5])
            console.log(BUILDUP.buildupplayspeedclass)
            new Chart(myChartRef, {
                type: "radar",
                data: {
                    labels: ourLabels,
                    datasets: [
                        {
                            label: Object.keys(BUILDUP)[0],
                            data: BUILDUP.buildupplaydribblingclass.map(val => val === 'Little' ? 0 : val === 'Normal' ? 5 : 10),
                            backgroundColor:  color1
                        },
                        {
                            label: Object.keys(BUILDUP)[1],
                            data: BUILDUP.buildupplaydribbling.map(value => {
                                if (value === null) {
                                  return null;
                                } else if (value < 40) {
                                  return 0;
                                } else if (value >= 40 && value < 50) {
                                  return 5;
                                } else {
                                  return 10;
                                }
                              }),
                            backgroundColor: color2
                        },
                        {
                            label: Object.keys(BUILDUP)[2],
                            data: BUILDUP.buildupplaypassing.map((value) => {
                                if (value < 30) {
                                  return 3;
                                } else if (value < 50) {
                                  return 6;
                                } else {
                                  return 10;
                                }
                            }),
            
                            backgroundColor: color3
                        },
                        {
                            label: Object.keys(BUILDUP)[3],
                            data: BUILDUP.buildupplaypassingclass.map(value => {
                                switch (value) {
                                  case 'Short':
                                    return 1;
                                  case 'Mixed':
                                    return 5;
                                  case 'Long':
                                    return 10;
                                  default:
                                    return value;
                            }}),
                            backgroundColor: color4
                        },
                        {
                            label: Object.keys(BUILDUP)[4],
                            data: BUILDUP.buildupplaypositioningclass.map(val => val === 'Free Form' ? 5 : val === 'Organised' ? 10 : val),
                            backgroundColor: color5
                        },
                        {
                            label: Object.keys(BUILDUP)[5],
                            data: BUILDUP.buildupplayspeed.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color6
                        },
                        {
                            label: Object.keys(BUILDUP)[6],
                            data: BUILDUP.buildupplayspeedclass.map(val => val === 'Slow' ? 5 : val === 'Balanced' ? 10 : val),
                            backgroundColor: color6
                        },
                    ]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }if(this.props.datos.creation){
            const CREATION = this.props.datos.creation;
            let ourLabels = Object.keys(CREATION);
            
            new Chart(myChartRef, {
                type: "radar",
                data: {
                    labels: ourLabels,
                    datasets: [
                        {
                            label: Object.keys(CREATION)[0],
                            data: CREATION.chancecreationpassing.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color1
                        },
                        {
                            label:  Object.keys(CREATION)[1],
                            data: CREATION.chancecreationpassingclass.map(value => {
                                switch (value) {
                                  case 'Safe':
                                    return 1;
                                  case 'Normal':
                                    return 5;
                                  case 'Risky':
                                    return 10;
                                  default:
                                    return value;
                            }}),
                            backgroundColor: color2
                        },
                        {
                            label:  Object.keys(CREATION)[2],
                            data: CREATION?.chancecreationcrossing.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color3
                        },
                        {
                            label:  Object.keys(CREATION)[3],
                            data: CREATION?.chancecreationcrossingclass.map(val => val === 'Little' ? 0 : val === 'Normal' ? 5 : 10),
                            backgroundColor: color4
                        },
                        {
                            label:  Object.keys(CREATION)[4],
                            data: CREATION.chancecreationshooting.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color5
                        },
                        {
                            label: Object.keys(CREATION)[5],
                            data: CREATION.chancecreationpositioningclass.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color6
                        },
                        {
                            label: Object.keys(CREATION)[6],
                            data: CREATION.chancecreationpositioningclass.map(val => val === 'Free Form' ? 5 : val === 'Organised' ? 10 : val),
                        }
                    ]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        if(this.props.datos.defence){
            const DEFENCE = this.props.datos.defence;
            let ourLabels = Object.keys(DEFENCE);
            
           
            new Chart(myChartRef, {
                type: "radar",
                data: {
                    labels: ourLabels,
                    datasets: [
                        {
                            label:Object.keys(DEFENCE)[0],
                            data: DEFENCE.defencepressure.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color1
                        },
                        {
                            label:Object.keys(DEFENCE)[1],
                            data: DEFENCE.defencepressureclass.map(val => val === 'Deep' ? 0 : val === 'Medium' ? 5 : 10),
                            backgroundColor: color2
                        },
                        {
                            label:Object.keys(DEFENCE)[2],
                            data: DEFENCE.defenceaggression.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color3
                        },
                        {
                            label:Object.keys(DEFENCE)[3],
                            data: DEFENCE.defenceaggressionclass.map(val => val === 'Press' ? 1 : val === 'Double' ? 5 : 10),
                            backgroundColor: color4
                        },
                        {
                            label:Object.keys(DEFENCE)[4],
                            data: DEFENCE.defenceteamwidth.map(val => val >= 61 ? 7 + (val - 61) * (3 / 9) :val >= 41 ? 4 + (val - 41) * (2 / 19) :val >= 20 ? 1 + (val - 20) * (2 / 21) : 0),
                            backgroundColor: color5
                        },
                        {
                            label:Object.keys(DEFENCE)[5],
                            data:  DEFENCE.defenceteamwidthclass.map(val => val === 'Narrow' ? 1 : val === 'Wide' ? 5 : 10),
                            backgroundColor: color6
                        },
                        {
                            label:Object.keys(DEFENCE)[6],
                            data: DEFENCE.defencedefenderlineclass.map(val => val === 'Cover' ? 1 : val === 'Offside Trap' ? 5 : 10),
                            backgroundColor: color7
                        },
                    ]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
    }
    render() {
        
    
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef} />
            </div>
        )
    }
}

export default RadarChart