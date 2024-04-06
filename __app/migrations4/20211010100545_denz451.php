<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Denz451 extends CI_Migration {

        public function up()
        {
            
                  
                 // Versi 4.0.0 Migration
                       $fieldMadrasah = array(
                        'activate' => array(
                                                'type' => 'CHAR',
                                                'constraint' => 1
                          ) 
                       
                           );
                       
                      if(!$this->db->field_exists('activate', 'tm_madrasah'))
                        {
        
                          $this->dbforge->add_column('tm_madrasah', $fieldMadrasah);
                        
                       }

                          

                         $fieldKelas = array(
                            'jenis' => array(
                                                    'type' => 'INT',
                                                    'constraint' => 1,
                                                    'default' => 0
                              ) 
                           
                               );
                           
                          if(!$this->db->field_exists('jenis', 'tr_kelas'))
                            {
            
                              $this->dbforge->add_column('tr_kelas', $fieldKelas);
                            
                           }


                           $fieldKeterampilan = array(
                            'rubrik' => array(
                                                    'type' => 'TEXT'
                              ) 
                           
                               );
                           
                          if(!$this->db->field_exists('rubrik', 'tr_keterampilan'))
                            {
            
                              $this->dbforge->add_column('tr_keterampilan', $fieldKeterampilan);
                            
                           }




                           
                             $fieldNilaiKeterampilan = array(
                            'rincian_nilai' => array(
                                                    'type' => 'TEXT'
                              ) 
                           
                               );
                           
                          if(!$this->db->field_exists('rincian_nilai', 'tr_keterampilannilai'))
                            {
            
                              $this->dbforge->add_column('tr_keterampilannilai', $fieldNilaiKeterampilan);
                            
                           }



                           $fieldRPP = array(
                            'alokasi' => array(
                                                    'type' => 'INT',
                                                    'constraint' => 11
                            ),
                            'keterangan' => array(
                              'type' => 'TEXT'
                            
                              )
                           
                               );
                           
                          if(!$this->db->field_exists("alokasi", 'tr_agenda'))
                            {
            
                              $this->dbforge->add_column('tr_agenda', $fieldRPP);
                            
                           }


                           $fieldHujian = array(
                            'waktu' => array(
                                                    'type' => 'INT',
                                                    'constraint' => 11
                            ),
                            'foto' => array(
                              'type' => 'TEXT'
                            
                              )
                           
                               );
                           
                          if(!$this->db->field_exists("waktu", 'h_ujian'))
                            {
            
                              $this->dbforge->add_column('h_ujian', $fieldHujian);
                            
                           }


                              $fieldSiswa = array(
                                'hp_siswa' => array(
                                                        'type' => 'VARCHAR',
                                                        'constraint' => 30
                                ),
                                  'hp_ayah' => array(
                                    'type' => 'VARCHAR',
                                    'constraint' => 30
                                ),
                                  'hp_ibu' => array(
                                    'type' => 'VARCHAR',
                                    'constraint' => 30
                                )
                           
                               );
                           
                          if(!$this->db->field_exists("hp_siswa", 'tm_siswa'))
                            {
            
                              $this->dbforge->add_column('tm_siswa', $fieldSiswa);
                            
                           }

                           $fieldGuru = array(
                            'hp_guru' => array(
                                                    'type' => 'VARCHAR',
                                                    'constraint' => 30
                            )
                       
                           );
                       
                            if(!$this->db->field_exists("hp_guru", 'tm_guru'))
                              {
              
                                $this->dbforge->add_column('tm_guru', $fieldGuru);
                              
                            }


                           $whatsapp = array(
                            'id' => array(
                                     'type' => 'INT',
                                     'constraint' => 11,
                                     'unsigned' => TRUE,
                                     'auto_increment' => TRUE
                                     ),
                            
                                                                      
                             'nomor' => array(
                                     'type' => 'VARCHAR',
                                     'constraint' => 50,
                                     'null' => TRUE
                                      ),
                             'redaksi' => array(
                                     'type' => 'TEXT'
                                      ),	
                             'pengirim' => array(
                                        'type' => 'VARCHAR',
                                        'constraint' => 100
                                         ),	
                             'trkelas_id' => array(
                                          'type' => 'INT',
                                          'constraint' => 11
                                           ),	
                             'tanggal' => array(
                                     'type' => 'DATETIME'
                              ),

                              
                             'tujuan' => array(
                                     'type' => 'VARCHAR',
                                     'constraint' => 100,
                                     'null' => TRUE
                              ),										  
							  
                            );
                                                        

                          if (!$this->db->table_exists("whatsapp") )
                          {
                                          $this->dbforge->add_key('id', TRUE);
                                          $this->dbforge->add_field($whatsapp);
                                          $this->dbforge->create_table('whatsapp');
                          }


                          $fieldAbsenGuru = array(
                            'pulang' => array(
                                                    'type' => 'DATETIME'
                            )
                       
                           );
                       
                            if(!$this->db->field_exists("pulang", 'tr_absensi'))
                              {
              
                                $this->dbforge->add_column('tr_absensi', $fieldAbsenGuru);
                              
                            }


                            $fieldAbsenGuruStatus = array(
                              'status' => array(
                                                      'type' => 'VARCHAR',
                                                      'constraint' => 100,
                                                       'null' => TRUE
                              )
                         
                             );
                         
                            if(!$this->db->field_exists("status", 'tr_absensi'))
                                {
                
                                  $this->dbforge->add_column('tr_absensi', $fieldAbsenGuruStatus);
                                
                            }

                         







		// Versi 3.0.0
		   
		$folder = array(
                         'folder' => array(
                                                 'type' => 'VARCHAR',
                                                 'constraint' => 255
                                          )
                        
                        );

		if (!$this->db->field_exists('folder', 'tm_madrasah'))
                   {
	
                        $this->dbforge->add_column('tm_madrasah', $folder);
                           
				 
                  }
				  
		 $fields = array("id" => array("type" => "INT", "constraint" => 11, "unsigned" => true, "auto_increment" => true), "idfolder" => array("type" => "VARCHAR", "constraint" => 50), "folder" => array("type" => "VARCHAR", "constraint" => 255));
		   if (!$this->db->table_exists("tm_gdrive")) {
			   $this->dbforge->add_key("id", true);
			   $this->dbforge->add_field($fields);
			   $this->dbforge->create_table("tm_gdrive");
		   }

              

                // Versi 2.0.0

                $ajaran = array('ajaran' => array('type' => 'char','constraint' => 4));
                if (!$this->db->field_exists('ajaran', 'tr_ruangkelas')){
  
                             $this->dbforge->add_column('tr_ruangkelas', $ajaran);
                           
                             $this->db->query("update tr_ruangkelas set ajaran='2019' where ajaran < '2020'");
                      }else{
                             
                             $this->db->query("update tr_ruangkelas set ajaran='2019' where ajaran < '2020'");
                      }
                      $alumni = array(
                                  'id' => array(
                                           'type' => 'INT',
                                           'constraint' => 11,
                                           'unsigned' => TRUE,
                                           'auto_increment' => TRUE
                                           ),
                                   'tmsiswa_id' => array(
                                           'type' => 'INT',
                                           'constraint' => 11
                                           ),
                                                                            
                                   'nisn' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 50,
                                           'null' => TRUE
                                            ),
                                   'nama' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 300
                                            ),	

                                   'tempat' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 100,
                                           'null' => TRUE
                                    ),

                                           'gender' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 100,
                                                                                            'null' => TRUE
                                    ),										  

                                          'tgl_lahir' => array(
                                           'type' => 'date',
                                                                                            'null' => TRUE
                                    ),

                                          'foto' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 100,
                                                                                           'null' => TRUE
                                    ),

                  'folder' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 100,
                                                                                            'null' => TRUE
                                    ),


                  'ajaran' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 10
                                    ),										  
                  
                  
                  );
                                          
     
            if (!$this->db->table_exists("tr_alumni") )
            {
                             $this->dbforge->add_key('id', TRUE);
                             $this->dbforge->add_field($alumni);
                             $this->dbforge->create_table('tr_alumni');
             }
             
             
           
           $vicon = array(
                   'id' => array(
                                           'type' => 'INT',
                                           'constraint' => 11,
                                           'unsigned' => TRUE,
                                           'auto_increment' => TRUE
                                    ),
                                                                            
                                          'jenis' => array(
                                           'type' => 'INT',
                                           'constraint' => 11
                                    ),
                                                                            
                                      'status' => array(
                                           'type' => 'INT',
                                           'constraint' => 11
                                  ),
                  'trkelas_id' => array(
                                           'type' => 'INT',
                                           'constraint' => 11
                                    ),
                                                                            
                                          'kode' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 50,
                                                                                            'null' => TRUE
                                    ),
                                      'nama' => array(
                                           'type' => 'VARCHAR',
                                           'constraint' => 300
                                    ),	

                                          'partisipan' => array(
                                           'type' => 'text',
                                                                                            'null' => TRUE
                                    ),
                                                                            
                                           'partisipan_mulai' => array(
                                            'type' => 'text',
                                                                                            'null' => TRUE
                     ),

                                          'partisipan_selesai' => array(
                                            'type' => 'text',
                                                                                            'null' => TRUE
                     ),									  

                                          'tgl_mulai' => array(
                                           'type' => 'DATETIME',
                                                                                            'null' => TRUE
                                    ),

                                          'tgl_selesai' => array(
                                           'type' => 'DATETIME',
                                           
                                                                                           'null' => TRUE
                                    ),
                                                                    
                  
                  
                  );
                                          
     
         if (!$this->db->table_exists("tr_vicon") )
            {
                             $this->dbforge->add_key('id', TRUE);
                             $this->dbforge->add_field($vicon);
                             $this->dbforge->create_table('tr_vicon');
             }
             
             
                  
             
  
			   
			   
			   
		   
        }
		
		
		

       
}

?>