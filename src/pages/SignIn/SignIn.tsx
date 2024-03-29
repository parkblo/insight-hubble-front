import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
const myTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Pretendard Variable',
    },
    h5 : {
      fontSize: '1.0rem',
      fontWeight: 'bold',
    },
    h6 : {
      fontSize: '1.0rem',
    },
  }
});

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="img/logo.png" alt="insight hubble" height={50}/>
          <Box sx={{ margin: 2 }}></Box>
          <Typography component="h1" variant="h5">
            지금 로그인하시고 모든 서비스를 이용해보세요
          </Typography>
          <Box sx={{ margin: 2 }}></Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography component="h1" variant="h6">
            이메일
          </Typography>
            <TextField
              margin="dense"
              required
              fullWidth
              id="email"
              // label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <Box sx={{ margin: 2 }}></Box>
            <Typography component="h1" variant="h6">
            비밀번호
          </Typography>
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              // label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 유지"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#7059FF', borderRadius: '10px', }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"가입하기"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
