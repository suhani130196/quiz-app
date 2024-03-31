const ScoreCard = ({score}) => {
    return(
        <div>
        <h3 className="ScoreCard">Score {score}</h3>
        <p className="winMessage">Congratulations! You won</p>
        </div>
    )
}
export default ScoreCard