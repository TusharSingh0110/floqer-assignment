// src/MainTable.js
import React, { useState } from 'react';
import { Table } from 'antd';
import { salaryData, jobDetails } from './data';

const MainTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
      onCell: (record) => ({
        onClick: () => setSelectedYear(record.year),
      }),
    },
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
  ];

  const jobColumns = [
    { title: 'Job Title', dataIndex: 'title', key: 'title' },
    { title: 'Number of Jobs', dataIndex: 'count', key: 'count' },
  ];

  const jobData = selectedYear
    ? jobDetails.filter((job) => job.year === selectedYear)[0].jobs
    : [];

  return (
    <div>
      <Table dataSource={salaryData} columns={columns} rowKey="year" />
      {selectedYear && (
        <Table dataSource={jobData} columns={jobColumns} rowKey="title" />
      )}
    </div>
  );
};

export default MainTable;
