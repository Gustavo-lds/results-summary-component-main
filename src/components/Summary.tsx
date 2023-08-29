import reaction from '../assets/icons/icon-reaction.svg';
import memory from '../assets/icons/icon-memory.svg';
import verbal from '../assets/icons/icon-verbal.svg';
import visual from '../assets/icons/icon-visual.svg';

export const Summary = () => {
    return (
        <main className="summary">
            <div className="result">
                <h3>Your Result</h3>
                <div className="overall"><span className="highlight">76</span> of 100</div>
                <h2>Great</h2>
                <p className='info'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>

            <div className="stats">
                <h2>Summary</h2>
                <div className="reaction">
                    <div className="info">
                        <img src={reaction} alt="Ícone que representa a reação" />
                        <span className="highlight">Reaction</span>
                    </div>
                    <p className="score"><span className="highlight">80</span> / 100</p>
                </div>
                <div className="memory">
                    <div className="info">
                        <img src={memory} alt="Ícone que representa a memória" />
                        <span className="highlight">Memory</span>
                    </div>
                    <p className="score"><span className="highlight">92</span> / 100</p>
                </div>
                <div className="verbal">
                    <div className="info">
                        <img src={verbal} alt="Ícone que representa a verbalização" />
                        <span className="highlight">Verbal</span>
                    </div>
                    <p className="score"><span className="highlight">61</span> / 100</p>
                </div>
                <div className="visual">
                    <div className="info">
                        <img src={visual} alt="Ícone que representa a visualização" />
                        <span className="highlight">Visual</span>
                    </div>
                    <p className="score"><span className="highlight">72</span> / 100</p>
                </div>
                <button>Continue</button>
            </div>
        </main>
    )
}