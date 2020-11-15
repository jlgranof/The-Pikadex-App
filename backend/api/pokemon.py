from flask import Blueprint
from backend.models import Pokemon, db

pokemon_routes = Blueprint('pokemon', __name__)

@pokemon_routes.route('/')
def get_all_pokemon():
    response = Pokemon.query.all()
    return { "pokemon": [pokemon.to_dict() for pokemon in response]}
