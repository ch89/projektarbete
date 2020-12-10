import { createStore } from 'vuex'

export default createStore({
	state: {
		cards: [
			{ id: 1, title: "Hamburger", content: "A really sweet hamburger", image: "/images/food1.jpg", likes: 0, messages: [] },
			{ id: 2, title: "Salad", content: "Some info about this recipe", image: "/images/food2.jpg", likes: 0, messages: [] },
			{ id: 3, title: "Sushi", content: "And something else here", image: "/images/food3.jpg", likes: 0, messages: [] },
			{ id: 4, title: "Pizza", content: "Some stuff goes here", image: "/images/food4.jpg", likes: 0, messages: [] },
			{ id: 5, title: "Dessert", content: "More info here", image: "/images/food5.jpg", likes: 0, messages: [] },
		]
	},
	mutations: {
		add(state, form) {
			state.cards.push({
				id: state.cards.length + 1,
				...form,
				likes: 0,
				messages: []
			})
		},
		remove(state, card) {
			state.cards.splice(state.cards.indexOf(card), 1)
		}
	},
	actions: {
	},
	modules: {
	}
})
