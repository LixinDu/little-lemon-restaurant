import restaurantfood from './assets/restauranfood.jpg';
import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';
import './Main.css'

function Brand() {
    return (
        <section className="grid-container brand">
            <article className="brand-intro">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional receipes served with a modern
                    twist.</p>
                <button> Reserve a Table</button>
            </article>
            <div className="brand-photo-container">
                <img className="brand-photo" src={restaurantfood} alt="restaurant food" />
            </div>
        </section>
    );
}

function Food(props) {
    return (
        <div className="food-container">
            <img className="food-photo" src={props.src} alt={props.alt} />
            <div className="food-description-container">
                <div className="food-label">{props.label}</div>
                <b className="food-price">{props.price}</b>
                <p className="food-intro">{props.intro}</p>
            </div>
        </div>
    );
}

function Special() {
    return (
        <section className="grid-container">
            <div className="grid-segment specials">
                <h2>This week specials!</h2>
                <button>online Menu</button>
            </div>
            <div className="grid-segment menu">
                <Food
                    src={greekSalad}
                    alt="greek salad"
                    label="Greek Salad"
                    price="€ 12.90"
                    intro="The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                garnished with cruncy garlic and rosemary croutons."
                />
                <Food
                    src={bruchetta}
                    alt="bruchetta"
                    label="Bruchetta"
                    price="€ 5.99"
                    intro="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with
                salt and olive oil."
                />
                <Food
                    src={lemonDessert}
                    alt="lemon dessert"
                    label="Lemon Dessert"
                    price="€ 5.00"
                    intro="This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as
                authentic as can be imagined."
                />
            </div>
        </section>
    );
}
function Main() {
    return (
        <main>
            <Brand />
            <Special />
        </main>
    );
};

export default Main;