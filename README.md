# PokeWorld Website: Discover Pokemons with Custom Pokemon List

PokeWorld is a website that allows users to discover Pokemon using a custom Pokemon list. It utilizes the API provided by [PokeAPI](https://pokeapi.co/).

## Technologies Used

- Astro with React and Tailwind CSS

## Thought Process

- The API returns an array of objects containing the Pokemon name and URL.
- The URL can be used to fetch more details about each Pokemon, including its type and image.
- Two React components, `PokeList` and `SinglePoke`, are created. 
- SEO is implemented using relevant keywords related to Pokemon.
- Caching is implemented for 1 hour to improve performance.
- While initially considering a context provider and a custom hook for fetching data, the idea was cancled as the project only have 2 components and requires few fetch call code.

## Features

- Fully responsive design; layout adjusts dynamically based on screen size.
- Pokemon search functionality allows users to find Pokemon by name.

## Live Website

Visit the live website at [PokeWorld](https://poke-world-three.vercel.app/).

## GitHub Repository

View the code on [GitHub](https://github.com/ddkogit/pokeWorld).

## Setup Instructions

Follow these steps to clone the PokeWorld project from GitHub and run it locally on your machine:

1. **Clone the GitHub Repository:**

    ```bash
    git clone https://github.com/ddkogit/pokeWorld.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd pokeWorld
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Run the Project:**

    ```bash
    npm run dev
    ```

    Now you can view the PokeWorld website in your browser at `http://localhost:4321`.



