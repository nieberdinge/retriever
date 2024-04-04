export default function Home() {
    return     (<div>

    {
        Array.from({length : 16} , (_, index)  :JSX.Element => {
            return (
              <div key={index}>
               <div className="card">
                <h1>Click Me!</h1>
                </div>
              </div>
            )
        })
      }
    </div>);
}