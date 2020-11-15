import requests

string_1 = ''
# string_2 = ''

for i in range(1,152):
    response_1 = requests.get(f"https://pokeapi.co/api/v2/pokemon/{i}")
    pokemon_info = response_1.json()

    response_2 = requests.get(f"https://pokeapi.co/api/v2/pokemon-species/{i}")
    pokemon_species = response_2.json()

    name = pokemon_info['name'].capitalize()
    type_1 = pokemon_info['types'][0]['type']['name'].capitalize()
    type_2 = None
    if len(pokemon_info['types']) == 2:
        type_2 = pokemon_info['types'][1]['type']['name'].capitalize()
    is_legendary = pokemon_species['is_legendary']
    is_mythical = pokemon_species['is_mythical']
    height = pokemon_info['height']
    weight = pokemon_info['weight']
    hp = pokemon_info['stats'][0]['base_stat']
    attack = pokemon_info['stats'][1]['base_stat']
    defense = pokemon_info['stats'][2]['base_stat']
    special_attack = pokemon_info['stats'][3]['base_stat']
    special_defense = pokemon_info['stats'][4]['base_stat']
    speed = pokemon_info['stats'][5]['base_stat']
    official_artwork = pokemon_info['sprites']['other']['official-artwork']['front_default']

    string_1 = string_1 + f'{name} = Pokemon(name = \'{name}\', type_1 = \'{type_1}\', type_2 = \'{type_2}\', is_legendary = {is_legendary}, is_mythical =  {is_mythical}, height = {height}, weight = {weight}, '
    string_1 = string_1 + f'hp = {hp}, attack = {attack}, defense = {defense}, special_attack = {special_attack}, special_defense = {special_defense}, speed = {speed}, official_artwork = \'{official_artwork}\')\n'

    # string_2 = string_2 + f'db.session.add({name})\n'

file = open("pokemon-create.txt", "w")
file.write(string_1)
file.close()

# file = open("pokemon-add.txt", "w")
# file.write(string_2)
# file.close()
