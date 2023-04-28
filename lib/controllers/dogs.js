import Dog from "../models/Dog.js"

export const getDogs = async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.json(dogs);
    } catch (error) {
        console.log(error.message);
        res.staus(500).json({ error: error.message });
    }
};

export const getDog = async (req, res) => {
    try {
      const { id } = req.params;
  
      const dog = await Dog.findById(id);
      res.json(dog);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createDog = async (req, res) => {
    try {
      const dog = new Dog(req.body);
      await dog.save();
      res.status(201).json(dog);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateDog = async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findByIdAndUpdate(id, req.body);
    res.status(200).json(dog);
  };
  
  export const deleteDog = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Dog.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Dog Deleted!");
      }
  
      throw new Error("Dog not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

