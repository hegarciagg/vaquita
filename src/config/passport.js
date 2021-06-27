const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');

passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async (email,password, done) => {
    //confirmar si coincide el correo del usuario
    const user=await User.findOne({email});
    if(!user){
        return done(null, false,{message:'No se encontró usuario'});

    }else{
        //confirmar password con base de datos
        const match = await user.matchPassword(password);
        if (match){
            return done(null, user); //passport guarda el usuario
        }else{
            return done(null, false, {message:'Password incorrecto'});
        }
    }
}));

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    })
});
