import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function TrialEndedPage() {
  const amount = 750000;

  const handleSubscribe = () => {
    const options = {
      key: "rzp_test_VXjP0c1IuhODqn",
      key_secret: "P8jvnm76819BFbfanLfnmYnE",
      amount: amount,
      currency: "INR",
      name: "SyncMedia Hub",
      description: "For testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      // prefill: {
      //   name: " ",
      //   email: " ",
      //   contact: " "
      // },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#eed9c4"
      }
    };

    const pay = new window.Razorpay(options);
    pay.open(); 
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: 450,
          height: 500,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: 4,
          margin: '20px auto'
        }}
      >
        <Typography variant='h3' sx={{ mb:2 }}>Choose the Plan</Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>Your 14-day free trial has ended.</Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>Subscribe now to continue using SyncMedia Hub.</Typography>
        <Box
          sx={{
            backgroundColor: '#f3f3f3',
            borderRadius: 5,
            padding: 2,
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Typography variant='h5' sx={{ mb: 1 }}>SyncMedia Hub Pro</Typography>
          <Typography variant='subtitle1' sx={{ mb: 1 }}>For Perfect users</Typography>
          <Typography variant='h4' sx={{ mb: 1 }}>$100</Typography>
          <Typography variant='body1' sx={{ mb: 2 }}>/Year</Typography>
          <Button variant='contained' color='primary' onClick={handleSubscribe}sx={{fontSize:24,backgroundColor:'#eed9c4',color:'black',marginTop:4,width:250,borderRadius:3,height:75,textAlign:'center','&:hover': { backgroundColor: 'white',},}}>Subscribe Now</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TrialEndedPage;
