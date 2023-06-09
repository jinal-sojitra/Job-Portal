import React, { useState,useEffect} from 'react'

import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import axios from 'axios'
import JobPost from './JobPost';

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  // const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get("/job");
          setJobs(response.data);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      };

      fetchJobs();
    }, []);
    console.log(jobs);

  

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} marginTop={10}>
      {jobs.map((job) => (
        <GridItem key={job._id} marginLeft={"10"}>
          <JobPost
            job={job._id}
            title={job.title}
            description={job.description}
            company={job.company}
            skills={job.skills}
            experience={job.experience}
            employmentType={job.employmentType}
            location={job.location}
            packageOffered={job.packageOffered}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

export default Jobs;
