import React from 'react';

export class AccountDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			parentClass: props.parentClass
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.closeDropdown = this.closeDropdown.bind(this);
	}

	toggleDropdown() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	closeDropdown() {
		this.setState({ isOpen: false });
	}

	render() {
		return (
			<div class={this.state.parentClass}>
				<div class="relative">
					<button
						onClick={this.toggleDropdown}
						class="relative z-10 block h-8 w-8 border-2 border-gray-600 rounded-full overflow-hidden focus:outline-none focus:border-white"
					>
						<img
							class="w-full h-full object-cover "
							src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
							alt="Your avatar"
						/>
					</button>
					<button
						class={
							this.state.isOpen ? (
								' cursor-default bg-black opacity-50 fixed inset-0 w-full h-full'
							) : (
								'hidden'
							)
						}
						onClick={this.closeDropdown}
						tabIndex="-1"
					/>
					<div
						class={
							this.state.isOpen ? (
								'absolute right-0 mt-2 w-48 bg-white rounded-lg py-2 shadow-xl'
							) : (
								'hidden'
							)
						}
					>
						<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
							Account settings
						</a>
						<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
							Support
						</a>
						<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
							Sign Out
						</a>
					</div>
				</div>
			</div>
		);
	}
}
