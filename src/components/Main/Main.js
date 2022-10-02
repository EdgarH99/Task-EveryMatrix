import React from "react";
import "./Main.css";
import downn from "../../assets/icons/downn.png";
import { PieChart, Pie, Sector, Cell } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import DenseTable from "../Table/Table";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 5900,
    amt: 10
  },
  {
    name: "Page B",
    uv: 6300,
    pv: 6800,
    amt: 4000
  },
  {
    name: "Page C",
    uv: 7000,
    pv: 5000,
    amt: 6000
  },
  {
    name: "Page D",
    uv: 4500,
    pv: 1000,
    amt: 7000
  },
  {
    name: "Page E",
    uv: 500,
    pv: 800,
    amt: 4000
  },
  {
    name: "Page F",
    uv: 1000,
    pv: 2500,
    amt: 900
  },
  {
    name: "Page G",
    uv: 4000,
    pv: 6000,
    amt: 1500
  },
  {
    name: "Page H",
    uv: 7000,
    pv: 7500,
    amt: 3500
  },
  {
    name: "Page J",
    uv: 8000,
    pv: 8000,
    amt: 6000
  }
];

const data1 = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 180 },
 
];
const COLORS = ["#086299", "#FFC66A", "#00ABA5"];


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Main(){
    return (
        <div className="main-section">
            <div className="section-graphics">
                <div className="medias-staats">
                    <div className="medias-top">
                        <h1>Medias Staats</h1>
                        <div>
                            <span>Last week</span>
                            <img src={downn} className="down-img"/>
                        </div>
                    </div>
                    <div className="grapic">
                        <div className="grapic-num">
                            <div>60</div>
                            <div>40</div>
                            <div>20</div>
                            <div>0</div>
                            <div>-20</div>
                        </div>
                             <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="name" hide={true}  />
                            <YAxis yAxisId="left" hide={true}  />
                            <YAxis yAxisId="right" orientation="right" hide={true}  />
                            <Tooltip />
                            <Legend />
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="pv"
                                stroke="#00ABA5"    
                                activeDot={{ r: 8 }}
                                strokeWidth={4} 
                            />
                            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#FFC66A" strokeWidth={4}  />
                            <Line yAxisId="right" type="monotone" dataKey="amt" stroke="#086299" strokeWidth={4}  />
                        </LineChart>
                    </div>
                </div> 
                <div className="active-medias">
                    <h1>Active Medias</h1>
                    <div className="section-active">
                        
                        <PieChart width={250} height={200}>
                            
                            <Pie
                                data={data1}
                                cx={140}
                                cy={100}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                
                                dataKey="value"
                            >
                                {data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                           <div className="a">50</div>
                        </PieChart>
                    </div>
                    <div className="active-bottom">
                         <div className="active-bottom-1">
                              <p>CTR</p> 
                              <p>25%</p>
                         </div>   
                         <div className="active-bottom-2">
                                <div>
                                    <div className="a1"></div>
                                    <p>Total Views</p>
                                </div>
                                <p>200</p>
                         </div>   
                         <div className="active-bottom-2">
                                <div>
                                    <div className="a2"></div>
                                    <p>Total Views</p>
                                </div>
                                <p>65</p>
                         </div>  
                         <div className="active-bottom-2">
                                <div>
                                    <div className="a3"></div>
                                    <p>Total Views</p>
                                </div>
                                <p>22</p>
                         </div>                   
                    </div>
                </div>
                <div className="geographic-data">
                    <div className="medias-top">
                        <h1>Geographic Data</h1>
                        <div>
                            <span>Last Month</span>
                            <img src={downn} className="down-img"/>
                        </div>
                    </div>
                    <div className="section-map">
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="section-signup">
                         <div>
                            <span>Affiliate Sign Ups</span>
                            <img src={downn} className="down-img"/>
                         </div>
                    </div>
                    <div className="geo-bottom">
                         <p>
                            1. United States
                         </p>
                         <p>
                            200
                         </p>
                    </div>
                    <div className="geo-bottom">
                         <p>
                            2. China
                         </p>
                         <p>
                            65
                         </p>
                    </div>
                    <div className="geo-bottom">
                         <p>
                            3. United Kingdom
                         </p>
                         <p>
                            22
                         </p>
                    </div>
                </div>
            </div>
            <div className="section-table">
                <div>
                    <div><p>Top Affiliates</p></div>
                    <section>
                        <DenseTable/>
                    </section>
                </div> 
                <div>
                    <div><p>Signups</p></div>
                     <section>
                        <DenseTable/>
                    </section>
                </div>  
                <div style={{border: "none"}}>
                    <div><p>Pending Commissions</p></div>
                     <section>
                        <DenseTable/>
                    </section>
                </div>                   
            </div>
        </div>
    )
}

export default Main;