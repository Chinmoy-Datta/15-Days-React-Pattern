import { useState } from 'react'
import './App.css'
// import Card from './messy/Card'
import Card from './with-pattern/card/Card'
import Tab from './with-pattern/tab/Tab'

function App() {

  const [secondCard, setSecondCard] = useState(false);


  return (

       //  <Card
    //    image={
    //      <img
    //        src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto"
    //        alt="Mystical Blue Swirl"
    //      />
    //    }
    //    title="Mystical Blue Swirl"
    //    body="Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a mesmerizing flow of colors."
    //    primaryAction={<button>Explore More</button>}
    //    secondaryAction={<button>Download Now</button>}
    //  />
      //  <Card>
      //     <Card.Image>
      //       <img 
      //         src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-10.png?width=350&format=auto"
      //         alt="Dynamic 3D Hover Card"
      //       />
      //     </Card.Image>

      //     <Card.Content>
      //       <Card.Header>
      //         <h1>Dynamic 3D Hover Card</h1>
      //       </Card.Header>

      //       <Card.Body>
      //         <p>
      //           Experience interactive depth and motion with this sleek 3D hover effect. 
      //           Move your cursor to see it come alive!
      //         </p>
      //       </Card.Body>

      //       <Card.Footer>
      //         <button>Explore More</button>
      //         <button>Download Now</button>
      //       </Card.Footer>
      //     </Card.Content>
      //   </Card>

            <Tab>
      <Tab.Button>
        <button
          // Apply 'active' class if secondCard is false (Card 1)
          className={!secondCard ? "active" : ""}
          onClick={() => setSecondCard(false)}
        >
          Card 1
        </button>
        
        <button
          // Apply 'active' class if secondCard is true (Card 2)
          className={secondCard ? "active" : ""}
          onClick={() => setSecondCard(true)}
        >
          Card 2
        </button>
      </Tab.Button>
      {secondCard ? (
        <Card>
          <Card.Image>
            <img 
              src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-10.png?width=350&format=auto"
              alt="Dynamic 3D Hover Card"
            />
          </Card.Image>

          <Card.Content>
            <Card.Header>
              <h1>Dynamic 3D Hover Card</h1>
            </Card.Header>

            <Card.Body>
              <p>
                Experience interactive depth and motion with this sleek 3D hover effect. 
                Move your cursor to see it come alive!
              </p>
            </Card.Body>

            <Card.Footer>
              <button>Explore More</button>
              <button>Download Now</button>
            </Card.Footer>
          </Card.Content>
        </Card>
      ) : (
        <Card>
          <Card.Image>
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto"
              alt="Mystical Blue Swirl"
            />
          </Card.Image>

          <Card.Content>
            <Card.Header>
              <h1>Mystical Blue Swirl</h1>
            </Card.Header>

            <Card.Body>
              <p>
                Dive into the depths of an enchanting swirl where vibrant blues
                and soft pinks merge seamlessly, creating a mesmerizing flow of
                colors.
              </p>
            </Card.Body>

            <Card.Footer>
              <button>Explore More</button>
              <button>Download Now</button>
            </Card.Footer>
          </Card.Content>
        </Card>
      )}
    </Tab>
    
  )
}

export default App
