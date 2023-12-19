

const Card = () => {
    return (
        <div>
                        {/* card */}
                        <div className="card bg-base-200 border-2 border-black rounded-lg">
              <div className="p-1 h-full rounded-xl">
                <figure>
                  <img src="https://iili.io/JAnx4gj.jpg" alt="Movie" />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">European Commission report on trade</h2>
                <p>Today on CNN10, a harrowing rescue mission to save 41 workers trapped in a tunnel in India. Details released into a federal lawsuit accusing tech giant Meta of steering children toward harmful content and contributing to a mental health crisis in the US. We also take you to Hawaii, where the world’s most dangerous animal is threatening an endangered species of native birds.</p>
              </div>
            </div>
            {/* card */}
            <div className="card bg-base-200 md:card-side border-2 border-black rounded-lg my-2">
              <div className="flex-1 h-full rounded-xl">
                <figure>
                  <img className="p-2 " src="https://iili.io/JAnIxMF.jpg" alt="Movie" />
                </figure>
              </div>
              <div className="card-body flex-1">
                <h2 className="card-title">Todays Football Match</h2>
                <p>College football player Reed Ryan, 22, tragically dies after suffering a cardiac arrest following a team workout... as family say defensive end passed away doing what he loved.</p>
              </div>
            </div>
            {/* card */}
            <div className="card bg-base-200 md:card-side border-2 border-black rounded-lg">
              <div className="flex-1 h-full rounded-xl">
                <figure>
                  <img className="p-2" src="https://iili.io/JAnIwtS.jpg" alt="Movie" />
                </figure>
              </div>
              <div className="card-body flex-1">
                <h2 className="card-title">Work on traffic lights</h2>
                <p>
                CNN 10 serves a growing audience interested in compact on-demand news broadcasts ideal for explanation seekers on the go or in the classroom. The show’s priority is to identify stories of international significance and then clearly describe.
                </p>
              </div>
            </div>
        </div>
    );
};

export default Card;