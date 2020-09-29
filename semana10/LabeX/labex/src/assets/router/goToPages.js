export const goBack = (history) => {
    history.goBack();
};

export const goToHomePage = (history) => {
    history.push("/");
};

export const goToApplicationPage = (history) => {
    history.push("/application-form/");
};

export const goToCreateTripPage = (history) => {
    history.push("/trip/create/");
};

export const goToListTripPage = (history) => {
    history.push("/trip/list/");
};

export const goToLoginPage = (history) => {
    history.push("/login/");
};

export const goToTripDetailsPage = (history) => {
    history.push("/trip/details/");
};