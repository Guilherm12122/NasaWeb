from Service import ApodService, MarsService

############
### MAIN ###
############


def main(test=False):

    # Criando objetos services
    if not test:
        apod_service = ApodService('DTmqcdZjMXD0nO6Es4YWjoOinBY7H8D0gJ0uWMux',
                                   'https://api.nasa.gov/planetary/apod',
                                   '2024-05-01',
                                   '2024-05-17', True)

        mars_service = MarsService('DTmqcdZjMXD0nO6Es4YWjoOinBY7H8D0gJ0uWMux',
                                   'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
                                   '1000', 1)

    # Enviando dados para banco de dados
    if not test:
        apod_service.enviar_dados()
        mars_service.enviar_dados()


main()
