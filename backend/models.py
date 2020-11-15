from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  password = db.Column(db.String(255), nullable = False)

  user_pokedex = db.relationship("User_Pokedex", back_populates="user")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }


class Pokemon(db.Model):
  __tablename__ = 'pokemons'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False)
  type_1 = db.Column(db.String(40), nullable = False)
  type_2 = db.Column(db.String(40))
  is_legendary = db.Column(db.Boolean, nullable = False)
  is_mythical = db.Column(db.Boolean, nullable = False)
  height = db.Column(db.Integer, nullable = False)
  weight = db.Column(db.Integer, nullable = False)
  hp = db.Column(db.Integer, nullable = False)
  attack = db.Column(db.Integer, nullable = False)
  defense = db.Column(db.Integer, nullable = False)
  special_attack = db.Column(db.Integer, nullable = False)
  special_defense = db.Column(db.Integer, nullable = False)
  speed = db.Column(db.Integer, nullable = False)
  official_artwork = db.Column(db.String(500), nullable = False)

  user_pokemon = db.relationship("User_Pokemon", back_populates="pokemon")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "type_1": self.type_1,
      "type_2": self.type_2,
      "is_legendary": self.is_legendary,
      "is_mythical": self.is_mythical,
      "height": self.height,
      "weight": self.weight,
      "hp": self.hp,
      "attack": self.attack,
      "defense": self.defense,
      "special_attack": self.special_attack,
      "special_defense": self.special_defense,
      "speed": self.speed,
      "official_artwork": self.official_artwork
    }



class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(10), nullable = False, unique = True)

    user_pokedex = db.relationship("User_Pokedex", back_populates="game")

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name
      }


class User_Pokedex(db.Model):
    __tablename__ = 'user_pokedexes'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"), nullable = False)

    user = db.relationship("User", back_populates="user_pokedex")
    game = db.relationship("Game", back_populates="user_pokedex")
    user_pokemon = db.relationship("User_Pokemon", back_populates="user_pokedex")

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "user": {
          "id": self.user.id,
          "username": self.user.username
        },
        "game": {
          "id": self.game.id,
          "name": self.game.name
        }
      }

class User_Pokemon(db.Model):
    __tablename__ = 'user_pokemons'

    id = db.Column(db.Integer, primary_key = True)
    user_pokedex_id = db.Column(db.Integer, db.ForeignKey("user_pokedexes.id"), nullable = False)
    pokemon_id = db.Column(db.Integer, db.ForeignKey("pokemons.id"), nullable = False)
    level = db.Column(db.Integer, nullable = False)
    hp = db.Column(db.Integer, nullable = False)
    attack = db.Column(db.Integer, nullable = False)
    defense = db.Column(db.Integer, nullable = False)
    special_attack = db.Column(db.Integer, nullable = False)
    special_defense = db.Column(db.Integer, nullable = False)
    speed = db.Column(db.Integer, nullable = False)
    active_party = db.Column(db.Boolean, nullable = False)
    still_own = db.Column(db.Boolean, nullable = False)

    user_pokedex = db.relationship("User_Pokedex", back_populates="user_pokemon")
    pokemon = db.relationship("Pokemon", back_populates="user_pokemon")

    def to_dict(self):
      return {
        "id": self.id,
        "pokemon": self.pokemon.to_dict(),
        "level": self.level,
        "hp": self.hp,
        "attack": self.attack,
        "defense": self.defense,
        "special_attack": self.special_attack,
        "special_defense": self.special_defense,
        "speed": self.speed,
        "active_party": self.active_party,
        "still_own": self.still_own
      }
