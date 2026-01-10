import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true,bcrypt: true},
  role: { type: String, enum: ['admin', 'officer', 'conductor'],default: 'conductor' },
  isActive: { type: Boolean, default: true },
  lastLogin: { type: Date },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
}, { timestamps: true });

// Add bcrypt plugin for password hashing
UserSchema.plugin(bcrypt);

// Method to check if user has access to a specific motel
// UserSchema.methods.hasMotelAccess = function(motelId) {
//   if (this.role === 'admin') return true;
//   return this.assignedMotels.some(m => m.equals(motelId));
// };

export default mongoose.model("User", UserSchema);
