describe("E2E - Testy Api", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.daneApi = data;
    });
  });

  it("Weryfikacja tagów API", () => {
    cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
    cy.visit("https://angular.realworld.io/");
    cy.wait("@requestTag");
    cy.get("@requestTag").then((res) => {
      console.log(res);
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.tags)
        .to.contain("welcome")
        .and.to.contain("implementations");
    });
  });

  it("Niepoprawne logowanie", function () {
    cy.visit("https://angular.realworld.io/");
    cy.intercept("POST", "https://api.realworld.io/api/users/login").as(
      "requestLogin"
    );
    cy.get("a.nav-link").contains("Sign in").click();
    cy.login(this.daneApi.login, this.daneApi.password);

    cy.wait("@requestLogin").then((res) => {
      console.log(res);
      expect(res.response.statusCode).to.eq(403);

      expect(res.response.statusMessage).to.eq(this.daneApi.statusMessage403);
    });
  });
});
