export default function ($scope) {

    this.onSubmit = () => this.handleSubmit({ login: this.login, password: this.password, $location: this.$location });
}