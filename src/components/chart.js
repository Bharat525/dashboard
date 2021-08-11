


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



const Chart = () => {


    return (


        <div className="chart-div">

                <div className = "chart-btn">
                    <h4>Investments</h4>




                <div className = "btns">

                    <button>Year</button>
                    <button>Month</button>
                    <button>Weeks</button>

                </div>
                </div>


           
            <ResponsiveContainer  width="100%" height="75%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
           


        </div>




    )




}
export default Chart