export type HomeI18nType = {
    home: {
        title: {
            first: string,
            second: string,
            third: string,
            fourth: string,
            fifth: string,
            sixth: string,
            seventh: string,
            eighth: string,
            ninth: string,
            last: string
        },
        titleSecond: string,
        description: string,
        cards: {
            first: {
                text: string,
                alt: string
            },
            second: {
                text: string,
                alt: string
            },
            last: {
                text: string,
                alt: string
            }
        },
        alts: string[]
    }
};

export type AdvantagesI18nType = {
    advantages: {
        title: string,
        titleSecond: {
            first: string,
            last: string
        },
        comparisonsList: {
            title: string,
            items: {
                other: string,
                elSolo: string
            }[]
        },
        advantagesList: {
            title: string,
            description: string
        }[],
        alts: string[]
    }
};

export type ListServicesI18nType = {
    services: {
        title: string,
        clickText: string,
        listServices: {
            title: string,
            list: string[],
            images: {
                icon: {
                    url: string,
                    alt: string
                },
                image: {
                    url: string,
                    alt: string
                }
            },
            description: string
        }[],
        pricesList: {
            price: string,
            title: string,
            descriptionFirst: string,
            descriptionSecond: string,
            ps: string,
            button: string
        }[],
        popUpWindow: {
            title: string,
            alt: string,
            listSocialNetwork: {
                url: string,
                name: string,
                alt: string
            }[]
        }
    }
};

export type PortfolioI18nType = {
    portfolio: {
        title: string,
        projects: {
            title: string,
            description: string,
            technologies: string[],
            button: {
                title: string,
                url: string
            },
            icon: {
                url: string,
                alt: string
            }
        }[]
    }
};

export type ContactsI18nType = {
    contacts: {
        title: "Свяжитесь со мной",
        listContacts: {
            name: "Телеграм",
            url: "https://t.me/K_a_R_a_T_e_L_L",
            src: "tg",
            alt: "Иконка телеграма"
        }[]
    }
};

export type HeaderI18nType = {
    header: {
        alt: string,
        listLinks: string[]
    }
};

export type FooterI18nType = {
    footer: {
        firstBox: {
            alt: string,
            title: string,
            description: string
        },
        secondBox: {
            title: string,
            listLinks: string[][]
        },
        thirdBox: {
            title: string,
            listLinks: string[][]
        },
        copyright: string
    }
};

export type I18nType = AdvantagesI18nType & HomeI18nType & ListServicesI18nType & PortfolioI18nType & ContactsI18nType & HeaderI18nType & FooterI18nType;