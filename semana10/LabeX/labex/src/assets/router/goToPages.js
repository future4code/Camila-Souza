export const goBack = (history) => {
    history.goBack();
};

export const goToHomePage = (history) => {
    history.push("/");
};

export const goToApplicationPage = (history) => {
    history.push("/inscricao/");
};

export const goToCreateTripPage = (history) => {
    history.push("/criarviagem/");
};

export const goToListTripPage = (history) => {
    history.push("/listadeviagens/");
};

export const goToLoginPage = (history) => {
    history.push("/login/");
};

export const goToTripDetailsPage = (history) => {
    history.push(`/detalhesdaviagem/${id}`);
};