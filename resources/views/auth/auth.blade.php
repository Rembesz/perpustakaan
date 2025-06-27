<!DOCTYPE html>
<html>
<head>
	<title>Login page</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="login">
				<form method="POST" action="{{ url('/auth') }}">
                    @csrf
					<label for="chk" aria-hidden="true">Login</label>
					<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email" required="" >
					<input id="password"  type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password" required="">
                    <div class="buttons-container">
						<button class="button-arounder" type="submit" >  {{ __('Login') }}</button>
					</div>
                    @error('email')
                        <span class="invalid-feedback" role="alert" style="display: block; text-align: center; color: white">
                            <h5>{{ $message }}</h5>
                        </span>
                    @enderror
				</form>
			</div>
            
			<div class="signup">
                <form method="POST" action="{{ url('/register') }}">
                    @csrf
					<label for="chk" aria-hidden="true">Sign up</label>
					<input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="User name">
					<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email">
					<input id="passwordd" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
					<input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
					<div class="buttons-container">
						<button class="button-arounder" type="submit" >  {{ __('Sign Up') }}</button>
					</div>
				</form>
				
			</div>
	</div>
</body>
</html>

<style>
    body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to right, #eea412 ,#5e72e4 , #4c5a7d);
}
.main{
	width: 350px;
	height: 500px;
	overflow: hidden;
	background: url("/img/nama-gambar.jpg") no-repeat center/cover;
	border-radius: 10px;
	box-shadow:  5px 20px 50px #4c5a7d;
}
#chk{
	display: none;
}
.login{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 50px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 10px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 12px;
	border: none;
	outline: none;
	border-radius: 5px;
}
.buttons-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background: white;
  border: solid 2px black;
  padding: .2em 0.5em;
  font-size: 1rem;
}

.button-arounder {
  font-size: 23px;
  background: #4c5a7d;
  color: hsl(190deg, 10%, 95%);
  
  box-shadow: 0 0px 0px hsla(0, 15%, 5%, 0.2);
  transfrom: translateY(0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  
  --dur: .15s;
  --delay: .15s;
  --radius: 16px;
  
  transition:
    border-top-left-radius var(--dur) var(--delay) ease-out,
    border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
    border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
    border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
    box-shadow calc(var(--dur) * 4) ease-out,
    transform calc(var(--dur) * 4) ease-out,
    background calc(var(--dur) * 4) steps(4, jump-end);
}

.button-arounder:hover,
.button-arounder:focus {
  box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
  transform: translateY(-4px);
  background: #eea412;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.signup{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.signup label{
	color: #4c5a7d;
	transform: scale(.6);
}

#chk:checked ~ .signup{
	transform: translateY(-500px);
}
#chk:checked ~ .signup label{
	transform: scale(1);	
}
#chk:checked ~ .login label{
	transform: scale(.6);
}

</style>
