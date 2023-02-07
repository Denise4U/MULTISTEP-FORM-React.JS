import "./Thanks.css";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/BS";

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>,

}
const Thanks = ({data}) => {

    return (
        <div className="thanks-container">
            <h2>Falta pouco</h2>
            <p>A sua opnião ée muito importante! Em breve você receberá um cupom de 10% de desconto</p>
            <p>Para concluir sua avaliação, clique no botão "enviar" abaixo</p>
            <h4>Aqui está o resumo da sua avaliação, {data.name}:</h4>
            <p className="review-data">
                <span>satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>comentário:</span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks