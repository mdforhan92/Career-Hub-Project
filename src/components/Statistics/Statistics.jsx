import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Assignment 1', mark: 57, fullMarks: 60 },
    { name: 'Assignment 2', mark: 60, fullMarks: 60 },
    { name: 'Assignment 3', mark: 60, fullMarks: 60 },
    { name: 'Assignment 4', mark: 58, fullMarks: 60 },
    { name: 'Assignment 5', mark: 60, fullMarks: 60 },
    { name: 'Assignment 6', mark: 58, fullMarks: 60 },
    { name: 'Assignment 7', mark: 60, fullMarks: 60 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#d84a9d'];

const Statistics = () => {
    return (
        <div className="flex justify-center align-middle h-full">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="mark"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={({ name }) => name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, `/${data.find(entry => entry.name === name).fullMarks}`]} />
            </PieChart>
        </div>
    );
}


export default Statistics;