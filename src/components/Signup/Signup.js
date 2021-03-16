import { Component } from 'react';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            signupName:'',
            signupEmail:'',
            signupPass:''
        }
    }
    
    onNameChange=(event)=>{
        this.setState({signupName:event.target.value})
        // console.log(this.state.signupName)
    }
    onEmailChange=(event)=>{
        this.setState({signupEmail:event.target.value})
        // console.log(this.state.signupEmail)
    }
    onPasswordChange=(event)=>{
        this.setState({signupPass:event.target.value}) 
        // console.log(this.state.signupPass)
    }
    onSubmitSignup=()=>{
        fetch("http://localhost:3001/signup",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
                name:this.state.signupName,
                email:this.state.signupEmail,
                password:this.state.signupPass
            })
        })
        .then(res=>res.json())
        .then(user=> {
             if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
               }
        })
        .catch(console.log)
    

    }

    render(){
      
    return (
<article className=" br3 shadow-5 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <article className="pa4 black-80">
        <div action="sign-up_submit" method="get" acceptCharset="utf-8">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0 ">Sign Up</legend>
                 <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
                <input 
                onChange={this.onNameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                 <input 
                 onChange={this.onEmailChange}
                 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                 <input
                 onChange={this.onPasswordChange}
                 className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>   
                    
            </fieldset>
          <div className="mt3">
          <input 
               onClick={this.onSubmitSignup}
               className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
               type="submit" 
               value="Sign up"/>
            </div>
          </div>
        </article>
</article>
    );     
    }
   

}
export default Signup;