import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    deleted: {
      type: mongoose.Schema.Types.Boolean,
      index: true,
      default: false,
    },   
  },

);
const Group = mongoose.model('Group', GroupSchema);
export default Group;