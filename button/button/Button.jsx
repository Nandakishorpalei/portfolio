import "./Button.css";

export const Button = ({children})=>{
    return   <button class="custom-btn btn-customize"><span>{children}</span></button>
}