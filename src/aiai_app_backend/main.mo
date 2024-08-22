import Nat32 "mo:base/Nat32";
import Trie "mo:base/Trie";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
actor {

  // USER ===============================================================
  public type UserId = Nat32;

  public type Users = {
    username : Text;
    avatar : Text;
  };

  private stable var userId : UserId = 0;

  private stable var users : Trie.Trie<UserId, Users> = Trie.empty();

  private func keyuser(x : UserId) : Trie.Key<UserId> {
    return { hash = x; key = x };
  };

  // create user
  public func createUser(user : Users) : async UserId {
    let user_id = userId;
    userId += 1;
    users := Trie.replace(
      users,
      keyuser(user_id),
      Nat32.equal,
      ?user,
    ).0;

    return user_id;
  };

  // Read user
  public query func readUser(user_id : UserId) : async ?Users {
    let result = Trie.find(users, keyuser(user_id), Nat32.equal);
    return result;
  };

  public query func readAllUser() : async [(UserId, Users)] {
    let resultAllData = Iter.toArray(Trie.iter(users));
    return resultAllData;
  };

  // Update user
  public func updateUser(user_id : UserId, userinput : Users) : async Bool {
    let resultUser = Trie.find(users, keyuser(user_id), Nat32.equal);

    let data = Option.isSome(resultUser);
    if (data) {
      users := Trie.replace(
        users,
        keyuser(user_id),
        Nat32.equal,
        ?userinput,
      ).0;
    };
    return data;

  };

  // Delete user
  public func deleteUser(user_id : UserId) : async Bool {
    let resultUser = Trie.find(users, keyuser(user_id), Nat32.equal);

    let data = Option.isSome(resultUser);
    if (data) {
      users := Trie.replace(
        users,
        keyuser(user_id),
        Nat32.equal,
        null,
      ).0;
    };
    return data;

  };

  // MODEL ===============================================================

  public type ModelId = Nat32;

  public type Model = {
    modelname : Text;
    url : Text;
    author : Text;
    description : Text;
  };

  private stable var modelId : ModelId = 0;

  private stable var models : Trie.Trie<ModelId, Model> = Trie.empty();

  private func keymodel(x : ModelId) : Trie.Key<ModelId> {
    return { hash = x; key = x };
  };

  // Create Model
  public func createModel(model : Model) : async ModelId {
    let model_id = modelId;
    modelId += 1;
    models := Trie.replace(
      models,
      keymodel(model_id),
      Nat32.equal,
      ?model,
    ).0;

    return model_id;
  };

  // Read Model
  public query func readModel(model_id : ModelId) : async ?Model {
    let result = Trie.find(models, keymodel(model_id), Nat32.equal);
    return result;
  };

  public query func readAllModel() : async [(ModelId, Model)] {
    let resultAllData = Iter.toArray(Trie.iter(models));
    return resultAllData;
  };

  // Update Model
  public func updateModel(model_id : ModelId, modelinput : Model) : async Bool {
    let resultModel = Trie.find(models, keymodel(model_id), Nat32.equal);

    let data = Option.isSome(resultModel);
    if (data) {
      models := Trie.replace(
        models,
        keymodel(model_id),
        Nat32.equal,
        ?modelinput,
      ).0;
    };
    return data;

  };

  // Delete Model
  public func deleteModel(model_id : ModelId) : async Bool {
    let resultModel = Trie.find(models, keymodel(model_id), Nat32.equal);

    let data = Option.isSome(resultModel);
    if (data) {
      models := Trie.replace(
        models,
        keymodel(model_id),
        Nat32.equal,
        null,
      ).0;
    };
    return data;

  };

  // MIX ===============================================================
  public type UserModelId = Nat32;

  public type UserModels = {
    userId : UserId;
    modelId : ModelId;
  };

  private stable var usermodelId : UserModelId = 0;
  private stable var usermodels : Trie.Trie<UserId, UserModels> = Trie.empty();

  public func createModelUser(usermodel : UserModels) : async Bool {
    let userId = usermodel.userId;
    let modelId = usermodel.modelId;
    let _oUser = Trie.get(users, keyuser userId, Nat32.equal);
    let _oModel = Trie.get(models, keymodel modelId, Nat32.equal);

    switch (_oUser, _oModel) {
      case (null, null) {
        false;
      };
      case (?_vUser, null) {
        false;
      };
      case (null, ?_vModel) {
        false;
      };
      case (?_vUser, ?_vModel) {
        let usermodels_id = usermodelId;
        usermodelId += 1;
        usermodels := Trie.replace(
          usermodels,
          keyuser(usermodels_id),
          Nat32.equal,
          ?usermodel,
        ).0;
        true;
      };

    };
  };

  public query func readModelUser(user_id : UserId) : async ?UserModels {
    let result = Trie.find(usermodels, keymodel(user_id), Nat32.equal);
    return result;
  };

};
