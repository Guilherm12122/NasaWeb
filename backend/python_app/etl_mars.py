import requests
from pprint import PrettyPrinter
import pandas as pd
from sqlalchemy import create_engine
import MySQLdb
import pymysql

#### INICIALIZAÇÃO ####

##############
#### MARS ####
##############
pp = PrettyPrinter()
api_key = 'DTmqcdZjMXD0nO6Es4YWjoOinBY7H8D0gJ0uWMux'
URL_APOD = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
sol_mars = '1000'
page = 1


#### CRIAÇÃO DO OBJETO DE REQUISIÇÃO ####
obj_dict = {
    'api_key': api_key,
    'sol': sol_mars,
    'page': page
}

#### REALIZANDO REQUISIÇÃO ####
lista_mars = requests.get(URL_APOD, obj_dict).json()['photos']
lista_mars = [(obj['rover']['name'], obj['img_src'], obj['earth_date']) 
              for obj in lista_mars]

# #### ESTABELECER CONEXÃO COM O BANCO DE DADOS ####
try:
    conn = pymysql.connect(db='nasa_api', user='root', passwd='',
                           host='localhost', port=3306)
    cursor = conn.cursor()
except Exception as error:
    print(f"Não foi possível se conectar com o banco de dados: {error}")

query = "INSERT INTO mars (rover, img_src, earth_date) VALUES (%s, %s, %s)"
print(cursor.executemany(query, lista_mars))

conn.commit()