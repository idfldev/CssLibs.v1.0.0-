import '../csslibs.scss'; // Import CSS libraries
import $ from 'jquery';

// Core functionality
class MyLib {
  constructor() {
    this.initComponents();
  }
  
  initComponents() {
    // Khởi tạo các components
    $('[data-toggle="tooltip"]').tooltip();
  }
}

// Export để sử dụng global
window.MyLib = new MyLib();
export default MyLib;