from flask import Blueprint, request, jsonify
from backend.models import Pokemon, User_Pokedex, User_Pokemon, db

pokedex_routes = Blueprint('pokedex', __name__)

@pokedex_routes.route('/game/<id>')
def get_all_pokedexes_for_game(id):
    response = User_Pokedex.query.filter_by(game_id=id)
    pokedexes = [pokedex.to_dict() for pokedex in response]
    for pokedex in pokedexes:
        response2 = User_Pokemon.query.filter_by(user_pokedex_id=pokedex['id'])
        pokedex['pokemon'] = [pokemon.to_dict() for pokemon in response2]
    return { "pokedex": pokedexes }


@pokedex_routes.route('/')
def get_all_pokedexes():
    response = User_Pokedex.query.all()
    pokedexes = [pokedex.to_dict() for pokedex in response]
    for pokedex in pokedexes:
        response2 = User_Pokemon.query.filter_by(user_pokedex_id=pokedex['id'])
        pokedex['pokemon'] = [pokemon.to_dict() for pokemon in response2]
    return { "pokedex": pokedexes }


@pokedex_routes.route('/<id>')
def get_user_pokedexes(id):
    response = User_Pokedex.query.filter_by(user_id=id)
    pokedexes = [pokedex.to_dict() for pokedex in response]
    for pokedex in pokedexes:
        response2 = User_Pokemon.query.filter_by(user_pokedex_id=pokedex['id'])
        pokedex['pokemon'] = [pokemon.to_dict() for pokemon in response2]
    return { "pokedex": pokedexes }

@pokedex_routes.route('/', methods=['POST'])
def add_pokedex():
    name = request.json.get('name', None)
    user_id = request.json.get('user_id', None)
    game_id = request.json.get('game_id', None)

    if not name or not user_id or not game_id:
        return 401

    pokedex = User_Pokedex(name=name, user_id=user_id, game_id=game_id)
    db.session.add(pokedex)
    db.session.commit()
    return pokedex.to_dict()


@pokedex_routes.route('/<pokedex_id>/pokemon')
def get_pokemon(pokedex_id):
    response = User_Pokemon.query.filter_by(user_pokedex_id=pokedex_id)
    return { "pokemon": [pokemon.to_dict() for pokemon in response]}


@pokedex_routes.route('/<pokedex_id>/pokemon', methods=['POST'])
def add_pokemon(pokedex_id):
    user_pokedex_id = pokedex_id
    pokemon_id = request.json.get('pokemon_id', None)
    level = request.json.get('level', None)
    hp = request.json.get('hp', None)
    attack = request.json.get('attack', None)
    defense = request.json.get('defense', None)
    special_attack = request.json.get('special_attack', None)
    special_defense = request.json.get('special_defense', None)
    speed = request.json.get('speed', None)
    active_party = request.json.get('active_party', None)
    still_own = request.json.get('still_own', True)

    pokemon = User_Pokemon(user_pokedex_id=user_pokedex_id, pokemon_id=pokemon_id, level=level, hp=hp, attack=attack, defense=defense, special_attack=special_attack, special_defense=special_defense, speed=speed, active_party=active_party, still_own=still_own)
    db.session.add(pokemon)
    db.session.commit()
    return pokemon.to_dict()
