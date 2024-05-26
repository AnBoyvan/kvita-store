class ROUTES {
	private root = '';

	HOME = this.root;
	PRODUCTS = `${this.root}/products`;
	ORDERING = `${this.root}/ordering`;
	GALLERY = `${this.root}/gallery`;
	ABOUT = `${this.root}/about`;
	SIGNIN = `${this.root}/signin`;
	PASSWORD = `${this.root}/password`;

	CABINET = `${this.root}/cabinet`;
	CABINET_INFO = `${this.CABINET}/info`;
	CABINET_ORDERS = `${this.CABINET}/my-orders`;
	CABINET_FAVORITES = `${this.CABINET}/favorites`;

	DASHBOARD = `${this.root}/dashboard`;
	DASHBOARD_PRODUCTS = `${this.DASHBOARD}/products`;
	DASHBOARD_COMPOSE = `${this.DASHBOARD_PRODUCTS}/compose`;
	DASHBOARD_CAKES = `${this.DASHBOARD}/cakes`;
	DASHBOARD_ORDERS = `${this.DASHBOARD}/orders`;
	DASHBOARD_USERS = `${this.DASHBOARD}/users`;
	DASHBOARD_GALLERY = `${this.DASHBOARD}/gallery`;
}

export const PAGES = new ROUTES();
