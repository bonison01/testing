
const DeclarationSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="font-semibold mb-4">Declaration</h3>
      <div className="text-sm text-gray-700 mb-4">
        <p>I hereby declare that all the information provided in this form is true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information being found false or incorrect at any stage, my application is liable to be rejected.</p>
      </div>
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          id="declaration" 
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          required
        />
        <label htmlFor="declaration" className="text-sm font-medium">
          I agree to the above declaration
        </label>
      </div>
    </div>
  );
};

export default DeclarationSection;
