export default function CustomButton({value , Clickme}){
    return (
        <button style = {{
            backgroundColor: "red",
            color:"greenyellow",
            border:"2px solid black"
        }}

        onClick={Clickme}
        >
            {value}

        </button>
    )
}