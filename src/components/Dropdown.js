import { useState } from 'react';

const dropdownContent = {
  services: {
    categories: [
      { name: 'Game Design', subcategories: ['Concept development', 'Storyboarding and narrative design', 'Level design and world-building'] },
      { name: 'Game Development', subcategories: ['Full-cycle game development', 'Cross-platform development (PC, console, mobile)', 'VR/AR development'] },
      { name: 'Art and Animation', subcategories: ['2D and 3D art creation', 'Character design and animation', 'Environmental and visual effects'] },
      { name: 'Audio and Music', subcategories: ['Sound design', 'Original music composition', 'Voice acting'] },
      { name: 'Quality Assurance', subcategories: ['Comprehensive testing', 'Bug fixing and optimization', 'Playtesting and user feedback'] },
      { name: 'Launch and Post-Launch Support', subcategories: ['Marketing and promotion', 'Community management', 'Updates and DLC development'] }
    ]
  },
  portfolio: {
    categories: [
      { name: 'Recent Projects', subcategories: ['Mystic Realms', 'Galactic Conquest', 'Dreamweaver\'s Quilt'] }
    ]
  },
  contact: {
    categories: [
      { name: 'Contact Methods', subcategories: ['Email', 'Phone', 'Social Media'] }
    ]
  }
};

const Dropdown = ({ content }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="absolute left-0 mt-2 w-[600px] h-[450px] bg-gray-800 rounded-lg shadow-lg p-4 flex text-white opacity-75">
      <div className="w-1/3 border-r border-gray-600">
        {dropdownContent[content].categories.map((category, index) => (
          <div
            key={index}
            className="mb-4 cursor-pointer"
            onMouseEnter={() => setActiveCategory(index)}
          >
            <h3 className={`text-lg font-bold ${activeCategory === index ? 'text-yellow-300' : ''}`}>{category.name}</h3>
          </div>
        ))}
      </div>
      <div className="w-2/3 pl-4">
        {activeCategory !== null && (
          <div>
            <h3 className="text-lg font-bold">{dropdownContent[content].categories[activeCategory].name}</h3>
            <ul className="list-disc list-inside mt-2">
              {dropdownContent[content].categories[activeCategory].subcategories.map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
