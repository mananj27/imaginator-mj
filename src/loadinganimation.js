// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// // export function CircularIndeterminate() {
// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CircularProgress />
// //     </Box>
// //   );
// // }

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// export function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}