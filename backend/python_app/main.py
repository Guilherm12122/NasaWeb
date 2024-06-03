from Service import ApodService, MarsService
from datetime import datetime, timedelta

############
### MAIN ###
############


def main(test=False):
    dt_today = datetime.now().date()
    dt_before = dt_today - timedelta(days=30)

    # Criando objetos services
    if not test:
        apod_service = ApodService('**********',
                                   'https://api.nasa.gov/planetary/apod',
                                   True, 'apod', dt_before, dt_today)

        mars_service = MarsService('**********',
                                   'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
                                   '1000', 1, 'mars')

    # # Enviando dados para banco de dados
    if not test:
        apod_service.enviar_dados()
        mars_service.enviar_dados()


main()

# Melhorias
# -> melhorar forma de sobrescrição e organização dos dados.
# -> testes unitários