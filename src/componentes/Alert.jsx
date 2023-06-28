import Alert from "react-bootstrap/Alert"

const Alerta = ({ resAleta }) => {
    return (
        <Alert
        className="text-center"
        variant ={resAleta.variantAlerta}
        show={resAleta.showAlerta}
        >
            {resAleta.msgAlerta}
        </Alert>
    );
};

export default Alerta;