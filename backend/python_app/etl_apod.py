import requests
from pprint import PrettyPrinter
import pandas as pd
from sqlalchemy import create_engine
import MySQLdb
import pymysql

#### INICIALIZAÇÃO ####

##############
#### APOD ####
##############
pp = PrettyPrinter()
api_key = '***************************'
URL_APOD = "https://api.nasa.gov/planetary/apod"
start_date = '2024-05-01'
end_date = '2024-05-17'
hd = 'True'

#### CRIAÇÃO DO OBJETO DE REQUISIÇÃO ####
obj_dict = {
    'api_key': api_key,
    'start_date': start_date,
    'end_date': end_date,
    'hd': hd
}

#### REALIZANDO REQUISIÇÃO ####
lista_apod = requests.get(URL_APOD, obj_dict).json()

for obj in lista_apod:
    obj.pop('copyright', None)
    obj.pop('media_type', None)
    obj.pop('service_version', None)
    obj.pop('hdurl', None)

lista_apod = [(obj['date'], obj['title'], obj['explanation'], obj['url']) for obj in lista_apod]
pp.pprint(lista_apod)

#### ESTABELECER CONEXÃO COM O BANCO DE DADOS ####
try:
    conn = pymysql.connect(db='nasa_api', user='root', passwd='', host='localhost', port=3306)
    cursor = conn.cursor()
except Exception as error:
    print(f"Não foi possível se conectar com o banco de dados: {error}")

query = "INSERT INTO apod (date, title, explanation, url) VALUES (%s, %s, %s, %s)"
print(cursor.executemany(query, lista_apod))

conn.commit()